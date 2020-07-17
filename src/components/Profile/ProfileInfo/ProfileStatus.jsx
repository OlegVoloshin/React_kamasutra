import React from 'react';
import s from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {//class создает однотипные обьекты и у них есть state
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({//встроенный метод в React.Component (.setState асинхронен)
            editMode: true
        });          
    }
    deactivateEditMode = () => {
        this.setState({//встроенный метод в React.Component (.setState асинхронен)
            editMode: false
        });    
        this.props.updateStatus(this.state.status);      
    }

    onStatusChange = (e) => {
        this.setState({// сетаем в локальный стейт
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {//если изменился глобальный статус, то сэтаем локальный
        if(prevProps.status !== this.props.status)// если в предидущих пропсах статус не равен статусу в текущих пропсах
        this.setState({
            status: this.props.status
        })
    }
    
    render() {
        return (
            <div>
                {!this.state.editMode &&// если false
                    <div>                        
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "------"}</span>                    
                    </div>
                }
                {this.state.editMode &&// если true
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}  value={this.state.status} />                 
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;