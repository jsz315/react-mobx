import {observer, inject} from 'mobx-react';
import React from 'react';

@inject("todoList")
@observer
class TodoList extends React.Component{
    render(){
        return(
            <div>TodoList的长度：{this.props.todoList.todos.length + 1}个</div>
        )
    }
}

export default TodoList