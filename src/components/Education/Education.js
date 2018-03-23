import React, { Component } from 'react'

import { CardDetail } from '../Card'


const Theme = {
    lightTheme: {
        head: '#757575',
        icon: '#3F68B5',
        text: '#666666',
        hr: '#E5E5E5'
    },
    darkTheme: {
        head: '#E2E2E2',
        icon: '#E41E26',
        text: '#E7E7E7',
        hr: '#5F5F5F',
    }
}

class Education extends Component {
    render() {
        const educationData = [
            {
                title: 'Burapha University',
                subTitle: 'Bachelor degree of Science in Computer, Facult of Informatics',
                date: 'Aug 2014 - Mar 2018',
                gpa: 'GPA: 3.18 (5 semesters)'
            },
            {
                title: 'Maryvit School',
                subTitle: 'Science - Mathematics',
                date: 'Mar 2002 - Feb 2014',
                gpa: null,
            }
        ]
        const { changed } = this.props
        const Mode = changed.changed

        const styles = {
            icon: {
                marginRight: 15,
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
            dateStyle: {
                fontSize: 14,
                color: `${Theme[Mode].icon}`,
            },
            gpaStyle: {
                fontSize: 14,
                color: `${Theme[Mode].text}`,
                marginTop: -13,
            },
            descriptionStyle: {
                fontSize: 14,
                color: `${Theme[Mode].text}`,
                marginTop: 5,
            }
        }
        return (
            <div>
                <div style={{ display: 'flex' }}>
                    <i className="fas fa-graduation-cap" style={styles.icon}></i>
                    <h1 style={{ color: `${Theme[Mode].head}`, fontSize: 25, display: 'inline-block' }}>Education</h1>
                </div>
                {
                    educationData.map((data, i) =>
                        <CardDetail key={i}>
                            <h2 style={styles.titleStyle}>{data.title}</h2>
                            <p style={styles.descriptionStyle}>{data.subTitle}</p>
                            {data.gpa !== null ? <p style={styles.gpaStyle}>{data.gpa}</p> : null}
                            <div style={{ display: 'flex', marginTop: 15 }}>
                                <i className="fas fa-calendar-alt" style={styles.iconDate}></i>
                                <p style={styles.dateStyle}>{data.date}</p>
                            </div>
                            {i === educationData.length - 1 ? null : <hr style={{ backgroundColor: `${Theme[Mode].hr}`, marginTop: -1 }} />}
                        </CardDetail>
                    )
                }
            </div>
        )
    }
}



export default Education