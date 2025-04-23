// intersection type

type FileData = {
  path: string;
  content: string;
};

type DatabaseData = {
  connectionUrl: string;
  credentials: string;
};

type Status = {
  isOpen: boolean;
  errorMessage?: string;
};

type AccessedFileData = FileData & Status;
type AccessedDatabaseData = DatabaseData & Status;

// alternate using interfaces

interface UserData {
  name: string;
  age: number;
}

interface Permissions {
  role: "admin" | "readonly";
}

interface AccessUserData extends UserData, Permissions {}
