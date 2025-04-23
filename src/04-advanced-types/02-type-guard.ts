// type guard
type FileSource = {
  type: "file";
  path: string;
};

const fileSource: FileSource = {
  type: "file",
  path: "some-sample-file-path",
};

type DBSource = {
  type: "db";
  connectionUrl: string;
};

const dbSource: DBSource = {
  type: "db",
  connectionUrl: "some-sample-connection-url",
};

type Source = FileSource | DBSource;

function loadData(source: Source) {
  if (source.type === "file") {
    // ...
    source.type;
    return;
  }
  source.connectionUrl;
}
