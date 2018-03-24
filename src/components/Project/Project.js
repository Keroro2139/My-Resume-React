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
        const { changed } = this.props
        const Mode = changed.changed
        const Language = changed.language

        const Information = {
            EN: {
                title: 'Project',
                project: [
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
            },
            TH: {
                title: 'ผลงาน',
                project: [
                    {
                        title: 'MFEC Web Application for AWS report',
                        detail: 'ใช้บริการคลาวด์สำหรับฐานข้อมูลและใช้ API Gateway เป็นตัวกลางในการรับส่งข้อมูลโดยใช้ Node.js และสร้างเว็บแอพพลิเคชั่นสำหรับรายงานพัฒนาโดยใช้ แนวคิด React Redux.',
                    },
                    {
                        title: `Employee's Work Time`,
                        detail: 'ออกแบบ ERD และพัฒนาโดยใช้ภาษา PHP และ ฐานข้อมูลเป็น MySQL.',
                    },
                    {
                        title: 'Todos App',
                        detail: 'สร้างแอพพลิเคชั่น Todos บนเว็บโดยใช้ AngularJS.',
                    },
                    {
                        title: 'Matching Game',
                        detail: 'สร้างเกมจับคู่บน IOS โดยใช้ภาษา Swift 3.0.',
                    },
                    {
                        title: 'Using the Elevator Simulation',
                        detail: 'จำลองการใช้ลิฟต์ของพนักงาน.',
                    },
                ]
            }
        }

        const styles = {
            icon: {
                marginRight: 17,
                marginTop: 5,
                marginLeft: 5,
                display: 'inline-block',
                color: `${Theme[Mode].icon}`,
                fontSize: 25,
            },
            titleStyle: {
                fontSize: 24,
                color: `${Theme[Mode].text}`,
                letterSpacing: -.25,
                fontWeight: 600,
            },
            descriptionStyle: {
                fontSize: 22,
                color: `${Theme[Mode].subText}`,
                marginTop: 5,
                lineHeight: 1,
            }

        }
        return (
            <div>
                <div style={{ display: 'flex' }}>
                    <i className="fas fa-code" style={styles.icon}></i>
                    <h1 style={{ color: `${Theme[Mode].head}`, fontSize: 32, display: 'inline-block' }}>{Information[Language].title}</h1>
                </div>
                {
                    Information[Language].project.map((data, i) =>
                        <CardDetail key={i}>
                            <h2 style={styles.titleStyle}>{data.title}</h2>
                            <i><p style={styles.descriptionStyle}>{data.detail}</p></i>
                            {i === Information[Language].project.length - 1 ? null : <hr style={{ backgroundColor: `${Theme[Mode].hr}` }} />}
                        </CardDetail>
                    )
                }
            </div>
        )
    }
}



export default Project