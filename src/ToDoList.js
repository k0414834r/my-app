import React, { Component } from "react";
import TodoItems from "./TodoItems"

class TodoList extends Component {

   constructor(props) {
       super(props);
       this.addItem = this.addItem.bind(this);
       this.state = {
           items: []
       };
   }

   addItem(e) {
       if (this._inputElement.value !== "") {
         var newItem = {
           text: this._inputElement.value,
           key: Date.now()
         };
     
         this.setState((prevState) => {
           return {
             items: prevState.items.concat(newItem)
           };
         });
       
         this._inputElement.value = "";
       }
       
       console.log(this.state.items);
         
       e.preventDefault();
     }

 render() {
   return (
     <div className="todoListMain">
       <div className="header">
         <form onSubmit={this.addItem}>
           <input ref={(a) => this._inputElement = a}
             placeholder="enter task">
           </input>
           <button type="submit">add5</button>
         </form>
            <TodoItems entries={this.state.items}/>
       </div>
     </div>
   );
 }
}

export default TodoList;