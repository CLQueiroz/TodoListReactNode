import React, { Component } from "react";
import api from "../services/api";
import "./Home.css";
import { MdModeEdit, MdDelete } from "react-icons/md";
import io from "socket.io-client";

export default class Home extends Component {
  state = {
    feed: [],
    completed: false
  };

  async componentDidMount() {
    this.registerToSocket();
    const response = await api.get("task");
    this.setState({ feed: response.data });
  }

  deleteItem = async id => {
    const idTask = id;
    await api.delete(`/tasks/${idTask}`);
    const response = await api.get("task");
    this.setState({ feed: response.data, ...response.data });
  };

  updateItem = async id => {
    this._isMounted = true;
    const idTask = id;
    console.log(idTask);
  };
  addCompleted = async id => {
    const idTask = id;
    const newCompleted = (this.completed = !this.completed);
    await api.patch(`/tasks/${idTask}`, {
      completed: newCompleted
    });
    const response = await api.get("task");
    this.setState({ feed: response.data });
  };
  registerToSocket = () => {
    const socket = io("http://localhost:3333");
    socket.on("tasks", newTask => {
      this.setState({ feed: newTask });
    });
    socket.on("tasks", newCompleted => {
      this.setState({
        feed: this.state.feed.map(task =>
          task._id === newCompleted._id ? newCompleted : task
        )
      });
    });
  };

  render() {
    return (
      <section id="post-list">
        {this.state.feed.map(item => {
          return (
            <article key={item._id} className="task">
              <input
                defaultChecked={item.completed}
                type="checkbox"
                name=""
                id=""
                key={item._id}
                onClick={e => {
                  this.addCompleted(item._id);
                }}
              />
              <div className={item.completed ? "completed" : ""}>
                {item.task}
              </div>
              <div>
                <MdModeEdit
                  cursor="pointer"
                  size="20"
                  color="#6da0ed"
                  title="Editar"
                  onClick={e => {
                    this.updateItem(item._id);
                  }}
                />
                <MdDelete
                  cursor="pointer"
                  size="20"
                  color="#70b58d"
                  title="Deletar"
                  onClick={e => {
                    if (window.confirm("Realmente deseja excluir esse item ?"))
                      this.deleteItem(item._id);
                  }}
                />
              </div>
            </article>
          );
        })}
      </section>
    );
  }
}
