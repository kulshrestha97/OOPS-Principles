interface Invoke {
  perform(command: Command);
  undo();
}
interface Command {
  execute();
  undo();
}
 
class DocumentObj {
  private text: string = "";
  addText(textToAdd: string) {
    this.text += textToAdd;
    console.log(`Text post adding: ${this.text}`)
  }
  deleteText(textToDelete: string) {
    const updatedText = this.text.slice(0, this.text.indexOf(textToDelete));
    this.text = updatedText;
    console.log(`Text post deleting: ${this.text}`)
  }
  getText() {
    return this.text;
  }
}

class AddCommand implements Command {
  private textToSave: string = "";
  private documentObj: DocumentObj;
  constructor(textToSave: string, doc: DocumentObj) {
    this.textToSave = textToSave;
    this.documentObj = doc;
  }
  
  execute() {
    this.documentObj.addText(this.textToSave);
  }
  undo() {
    this.documentObj.deleteText(this.textToSave);

  }
}

class Editor implements Invoke {
  private CommandHistory: Command[] = [];
  perform(command: Command) {
    command.execute();
    this.CommandHistory.push(command);
  }
  undo() {
    const command = this.CommandHistory.pop();
    command?.undo();
  }
}

const editor = new Editor();
const doc = new DocumentObj();
const add1 = new AddCommand("My name is Rajat", doc);
const add2 = new AddCommand("Shivanshi is amazing", doc);
editor.perform(add1);
editor.perform(add2);
editor.undo();
