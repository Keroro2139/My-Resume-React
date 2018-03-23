import React, { Component } from 'react'

import { CardDetail } from '../Card'

const Theme = {
    lightTheme: {
        head: '#757575',
        icon: '#3F68B5',
        text: '#666666',
        progress: '#3F68B5'
    },
    darkTheme: {
        head: '#E2E2E2',
        icon: '#E41E26',
        text: '#E7E7E7',
        progress: '#E41E26',
    }
}

class Skill extends Component {
    render() {
        const { changed } = this.props
        const Mode = changed.changed
        const Language = changed.language

        const skillList = [
            {
                skill: 'React, Redux and Javascript',
                level: 67,
            },
            {
                skill: 'React Native (Android)',
                level: 30,
            },
            {
                skill: 'HTML',
                level: 80,
            },
            {
                skill: 'CSS and SCSS',
                level: 75,
            },
            {
                skill: 'Java, C++ and C#',
                level: 83,
            },
            {
                skill: 'PHP & MySQL',
                level: 50,
            },
            {
                skill: 'Swift (IOS)',
                level: 25,
            },
            {
                skill: 'Photoshop and Illustrator',
                level: 85,
            },
            {
                skill: 'Git',
                level: 77,
            },
        ]

        const Information = {
            EN: {
                title: 'Skill'
            },
            TH: {
                title: 'ทักษะ'
            }
        }

        const styles = {
            icon: {
                marginRight: 15,
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
        }

        return (
            <div style={{ paddingBottom: 30 }}>
                <div style={{ display: 'flex' }}>
                    <i className="fas fa-cog" style={styles.icon}></i>
                    <h1 style={{ color: `${Theme[Mode].head}`, fontSize: 25, display: 'inline-block' }}>
                        {Information[Language].title}
                    </h1>
                </div>
                {
                    skillList.map((data, i) =>
                        <CardDetail key={i}>
                            <h2 style={styles.titleStyle}>{data.skill}</h2>
                            <div className="progress" style={{ height: 12, marginTop: 5 }} >
                                <div
                                    className="progress-bar progress-bar-striped progress-bar-animated"
                                    role="progressbar"
                                    style={{ width: `${data.level}%`, backgroundColor: `${Theme[Mode].progress}`, height: 12 }}
                                    aria-valuenow={`${data.level}%`}
                                    aria-valuemin="0"
                                    aria-valuemax="100">
                                </div>
                            </div>
                        </CardDetail>
                    )
                }
            </div>
        )
    }
}



export default Skill