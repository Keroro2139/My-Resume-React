import React, { Component } from 'react'

import { CardDetail } from '../Card'

const Theme = {
    lightTheme: {
        head: '#757575',
        icon: '#3F68B5',
        text: '#666666',
        subText: '#666666',
        hr: '#E5E5E5'
    },
    darkTheme: {
        head: '#E2E2E2',
        icon: '#E41E26',
        text: '#E7E7E7',
        subText: '#DADADA',
        hr: '#5F5F5F',
    }
}

class Project extends Component {
    render() {
        const projectDetail = [
            {
                title: 'MFEC Web Application for AWS report',
                detail: 'Using cloud services for database and API gateway with Node.js and create web application for report with React Redux concept.',
            },
            {
                title: `Employee's Work Time`,
                detail: 'Designed ERD and written the code by PHP and database as MySQL.',
            },
            {
                title: 'Todos App',
                detail: 'Created Todos app on web with AngularJS.',
            },
            {
                title: 'Matching Game',
                detail: 'Created Matching Game on IOS with Swift 3.0.',
            },
            {
                title: 'Using the Elevator Simulation',
                detail: 'Simulated using the elevator of employees.',
            },
        ]
        const { changed } = this.props
        const Mode = changed.changed

        const styles = {
            icon: {
                marginRight: 17,
                display: 'inline-block',
                color: `${Theme[Mode].icon}`,
                fontSize: 25,
            },
            titleStyle: {
                fontSize: 16,
                color: `${Theme[Mode].text}`,
                letterSpacing: -.25,
                fontWeight: 550,
            },
            descriptionStyle: {
                fontSize: 14,
                color: `${Theme[Mode].subText}`,
                marginTop: 5,
            }

        }
        return (
            <div>
                <div style={{ display: 'flex' }}>
                    <i className="fas fa-code" style={styles.icon}></i>
                    <h1 style={{ color: `${Theme[Mode].head}`, fontSize: 25, display: 'inline-block' }}>Project</h1>
                </div>
                {
                    projectDetail.map((data, i) =>
                        <CardDetail key={i}>
                            <h2 style={styles.titleStyle}>{data.title}</h2>
                            <i><p style={styles.descriptionStyle}>{data.detail}</p></i>
                            {i === projectDetail.length - 1 ? null : <hr style={{ backgroundColor: `${Theme[Mode].hr}` }} />}
                        </CardDetail>
                    )
                }
            </div>
        )
    }
}



export default Project