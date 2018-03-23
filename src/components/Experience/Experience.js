import React, { Component } from 'react'

import { CardDetail } from '../Card'

const Theme = {
    lightTheme: {
        head: '#757575',
        icon: '#3F68B5',
        text: '#666666',
    },
    darkTheme: {
        head: '#E2E2E2',
        icon: '#E41E26',
        text: '#E7E7E7',
    }
}

class Experience extends Component {
    render() {

        const { changed } = this.props
        const Mode = changed.changed

        const styles = {
            icon: {
                marginRight: 20,
                display: 'inline-block',
                color: `${Theme[Mode].icon}`,
                fontSize: 25,
            },
            iconDate: {
                marginRight: 18,
                display: 'inline-block',
                color: `${Theme[Mode].icon}`,
                fontSize: 18,
            },
            titleStyle: {
                fontSize: 16,
                color: `${Theme[Mode].text}`,
                letterSpacing: -.25,
                fontWeight: 550,
            },
            departmentStyle: {
                color: `${Theme[Mode].text}`,
                fontSize: 14,
                marginTop: 5,
            },
            dateStyle: {
                fontSize: 14,
                color: `${Theme[Mode].icon}`
            },
            descriptionStyle: {
                fontSize: 14,
                color: `${Theme[Mode].text}`
            }
        }
        return (
            <div>
                <div style={{ display: 'flex' }}>
                    <i className="fas fa-briefcase" style={styles.icon}></i>
                    <h1 style={{ color: `${Theme[Mode].head}`, fontSize: 25, display: 'inline-block' }}>Experience</h1>
                </div>
                <CardDetail>
                    <h2 style={styles.titleStyle}>Cloud Developer Engineer @ Mfec Co., Ltd.</h2>
                    <p style={styles.departmentStyle}>IT Solution Services (Internship)</p>
                    <div style={{ display: 'flex' }}>
                        <i className="fas fa-calendar-alt" style={styles.iconDate}></i><p style={styles.dateStyle}>Jan 2018 - Present</p>
                    </div>
                    <p style={styles.descriptionStyle}>Learn about cloud serivces of Amazon Web Services (AWS)
                        that each services what do and how to use to suitable for
                        each job and learn more about modern web technologies
                        with React Redux concept.</p>
                </CardDetail>
            </div>
        )
    }
}

export default Experience