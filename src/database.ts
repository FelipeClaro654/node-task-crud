import fs from "node:fs/promises";
import type { Task } from "./types/task";

const databasePath = new URL("../db.json", import.meta.url);

type Database = {
  [key: string]: Task[];
};

type DataInfo<T extends keyof Database> = {
  table: T;
  data: Pick<Task, "description" | "title">;
};

export const createDatabase = () => {
  let database: Database = {};
  fs.readFile(databasePath, "utf8")
    .then((data) => {
      database = JSON.parse(data);
    })
    .catch(() => {
      persistDatabase();
    });

  const persistDatabase = () => {
    console.log({ database });
    fs.writeFile(databasePath, JSON.stringify(database));
  };

  const insertData = <T extends keyof Database>({
    table,
    data,
  }: DataInfo<T>) => {
    const selectedTable = database[table];
    const newData: Task = {
      id: "123",
      title: data.title,
      description: data.description,
      completed_at: "Teste data",
      created_at: "teste created_at",
      updated_at: "teste updated_at",
    };

    if (Array.isArray(selectedTable)) {
      database[table].push(newData);
    } else {
      database[table] = [newData];
    }

    persistDatabase();
  };

  return { insertData };
};
