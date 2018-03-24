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
        const Language = changed.language

        const styles = {
            icon: {
                marginRight: 20,
                marginTop: 5,
                marginLeft: 5,
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
                fontSize: 24,
                color: `${Theme[Mode].text}`,
                letterSpacing: -.25,
                fontWeight: 600,
            },
            departmentStyle: {
                color: `${Theme[Mode].text}`,
                fontSize: 24,
                marginTop: -10,
            },
            dateStyle: {
                fontSize: 22,
                color: `${Theme[Mode].icon}`,
                marginTop: -5,
            },
            descriptionStyle: {
                fontSize: 22,
                color: `${Theme[Mode].text}`,
                lineHeight: 2,
            }
        }

        const Information = {
            EN: {
                title: 'Experience',
                internship: 'Internship',
                date: 'Jan 2018 - Present',
                description: 'Learn about cloud serivces of Amazon Web Services (AWS) that each services what do and how to use to suitable for each job and learn more about modern web technologies with React Redux concept.',
            },
            TH: {
                title: 'ประสบการณ์',
                internship: 'สหกิจศึกษา',
                date: 'มกราคม 2561 - ปัจจุบัน',
                description: 'ศึกษาเกี่ยวกับบริการคลาวด์ของ Amazon Web Services (AWS) ว่าแต่ละเซอร์วิสมีประโยชน์อย่างไร เลือกใช้ให้เหมาะสมกับแต่ละงาน และศึกษาเพิ่มเติมเกี่ยวกับเว็บสมัยใหม่ เช่น แนวคิดของ React Redux.'
            }
        }
        return (
            <div>
                <div style={{ display: 'flex' }}>
                    <i className="fas fa-briefcase" style={styles.icon}></i>
                    <h1 style={{ color: `${Theme[Mode].head}`, fontSize: 32, display: 'inline-block' }}>{Information[Language].title}</h1>
                </div>
                <CardDetail>
                    <h2 style={styles.titleStyle}>Cloud Developer Engineer @ Mfec Co., Ltd.</h2>
                    <p style={styles.departmentStyle}>IT Solution Services ({Information[Language].internship})</p>
                    <div style={{ display: 'flex' }}>
                        <i className="fas fa-calendar-alt" style={styles.iconDate}></i><p style={styles.dateStyle}>{Information[Language].date}</p>
                    </div>
                    <p style={styles.descriptionStyle}>{Information[Language].description}</p>
                </CardDetail>
            </div >
        )
    }
}

export default Experience