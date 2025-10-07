import {TodoItem} from "./todoItem.js";
import { TodoCollection } from "./todoCollection.js";
import { LowSync } from "lowdb";
import { JSONFileSync } from "lowdb/node";

type schecmaType = {
    tasks: { id: number; task: string; complete: boolean; }[]
};

export class JsonTodoCollection extends TodoCollection {
    private database: LowSync<schecmaType>;

    constructor(public userName:string, todoItems: TodoItem[] = []) {
        super(userName, []);
        this.database = new LowSync(new JSONFileSync("Todos.json"), {tasks: []});
        this.database.read();

        if (this.database.data == null) {
            this.database.data = {tasks: todoItems};
            this.database.write();
            todoItems.forEach(item => this.itemMap.set(item.id, item));
        } else {
            this.database.data.tasks.forEach(
                item => this.itemMap.set(
                    item.id,
                    new TodoItem(item.id, item.task, item.complete)
                )
            );
        }
    }

    addTodo(task: string):number {
        let result = super.addTodo(task);
        this.storeTasks();
        return result;
    }

    markComlete(id:number, complete:boolean) {
        super.markComplete(id, complete);
        this.storeTasks();
    }

    removeComplete() {
        super.removeComplete();
        this.storeTasks();
    }

    private storeTasks(): void {
        this.database.data.tasks = [... this.itemMap.values()];
        this.database.write();
    }
}