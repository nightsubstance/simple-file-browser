export interface DirectoryObject {
  name: string;
  path: string;
  isDirectory: boolean;
  isFile: boolean;
  children: this[];
}