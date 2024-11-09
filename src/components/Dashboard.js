import React, { useState } from 'react'
import './Dashboard.css'

export default function Dashboard() {

    const [condition, setCondition] = useState(false);
    const [create, setCreate] = useState(false);
    const [todo, setTodo] = useState(false);


    const [indicator, setIndicator] = useState({})

    const handaleIndicator = (btn) => {
        setIndicator({ top: btn.currentTarget.offsetTop + 6 + 'px' });
        if (btn.currentTarget.innerHTML.includes('Todo List')) {
            setIndicator({ top: '137px' });

        }

    }
    const logoHide = {
        opacity: condition ? '0' : '1',
    }



    return (
        <div className='container' >
            <nav className={`dashboard ${condition ? 'hide' : ''}`}>
                <div className="logo">
                    <span style={logoHide}>Sidebar.</span>
                    <i className={`${condition ? 'bi bi-chevron-right' : 'bi bi-x-lg'} ${condition ? 'rotate' : ''}`}
                        onClick={() => {
                            setCondition(!condition);
                            setCreate(false)
                            setTodo(false)
                            if (indicator.top === '397px') {
                                setIndicator({ top: '182px' })
                            }
                            if (indicator.top === '304px') {
                                setIndicator({ top: '182px' })
                            }
                            if (indicator.top === '441px') {
                                setIndicator({ top: '225px' })
                            }
                            if (indicator.top === '224px') {
                                setIndicator({ top: '225px' })
                            }
                        }}
                    ></i>
                </div>
                <ul>
                    <div className="indicator-bar" style={indicator}></div>
                    <li onClick={(event) => {
                        handaleIndicator(event)
                    }}>
                        <i className="bi bi-house-door"></i>
                        <span>Home</span>
                    </li>
                    <li onClick={(event) => {
                        handaleIndicator(event)
                    }}>
                        <i className="bi bi-menu-button"></i>
                        <span>Dashboard</span>
                    </li>
                    <div className="dropdown">

                        <button onClick={(event) => {
                            setCreate(!create)
                            setCondition(false)
                            handaleIndicator(event)
                            setTodo(false)
                        }}>
                            <div className="btn">
                                <i className="bi bi-folder2-open"></i>
                                <span>Create</span>
                            </div>
                            <i className={`bi bi-chevron-down ${create ? 'active' : ''}`}></i>
                        </button>
                        <ul className={`sub-menu ${create ? 'show' : ''}`}>
                            <div>
                                <li onClick={() => setIndicator({ top: '93px' })}>Folder</li>
                                <li onClick={() => setIndicator({ top: '93px' })}>Document</li>
                                <li onClick={() => setIndicator({ top: '93px' })}>Project</li>
                            </div>
                        </ul>
                    </div>
                    <div className="dropdown">

                        <button onClick={(event) => {
                            setTodo(!todo)
                            setCondition(false)
                            handaleIndicator(event)
                            setCreate(false)
                        }}>
                            <div className='btn'><i className="bi bi-list-check"></i>
                                <span>Todo List</span>
                            </div>
                            <i className={`bi bi-chevron-down ${todo ? 'active' : ''}`}
                            ></i>

                        </button>
                        <ul className={`sub-menu ${todo ? 'show' : ''}`}>
                            <div>
                                <li onClick={() => setIndicator({ top: '137px' })}>Work</li>
                                <li onClick={() => setIndicator({ top: '137px' })}>Privete</li>
                                <li onClick={() => setIndicator({ top: '137px' })}>Coding</li>
                                <li onClick={() => setIndicator({ top: '137px' })}>Gardening</li>
                                <li onClick={() => setIndicator({ top: '137px' })}>School</li>
                            </div>
                        </ul>
                    </div>
                    <li onClick={(event) => {
                        handaleIndicator(event)
                    }}>
                        <i className="bi bi-calendar2"></i>
                        <span>Celandar</span>
                    </li>
                    <li onClick={(event) => {
                        handaleIndicator(event)
                    }}>
                        <i className="bi bi-person"></i>
                        <span>Profile</span>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
