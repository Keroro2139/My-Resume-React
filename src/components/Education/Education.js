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

        const { changed } = this.props
        const Mode = changed.changed
        const Language = changed.language

        const Information = {
            EN: {
                title: 'Education',
                school: [
                    {
                        title: 'Burapha University',
                        subTitle: 'Bachelor degree of Science in Computer, Facult of Informatics',
                        date: 'Aug 2014 - Mar 2018',
                        gpa: 'GPA: 3.18 (5 semesters)'
                    },
                    {
                        title: 'Maryvit Pattaya School',
                        subTitle: 'Science - Mathematics',
                        date: 'Mar 2002 - Feb 2014',
                        gpa: null,
                    }
                ]
            },
            TH: {
                title: 'การศึกษา',
                school: [
                    {
                        title: 'มหาวิทยาลัยบูรพา',
                        subTitle: 'วิทยาการสารสนเทศ (ปริญญาตรี), คณะวิทยาการสารสนเทศ',
                        date: 'สิงหาคม 2557 - พฤษภาคม 2561',
                        gpa: 'เกรดเฉลี่ย: 3.18 (5 เทอม)'
                    },
                    {
                        title: 'โรงเรียนมารีวิทย์ พัทยา',
                        subTitle: 'วิทย์ - คณิต',
                        date: 'พฤษภาคม 2545 - กุมภาพันธ์ 2557',
                        gpa: null,
                    }
                ]
            }
        }

        const styles = {
            icon: {
                marginRight: 15,
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
                fontSize: 22,
            },
            titleStyle: {
                fontSize: 24,
                color: `${Theme[Mode].text}`,
                letterSpacing: -.25,
                fontWeight: 600,
                lineHeight: 1,
            },
            dateStyle: {
                fontSize: 22,
                color: `${Theme[Mode].icon}`,
                marginTop: -3,
            },
            gpaStyle: {
                fontSize: 22,
                color: `${Theme[Mode].text}`,
                marginTop: -13,
            },
            descriptionStyle: {
                fontSize: 22,
                color: `${Theme[Mode].text}`,
                marginTop: 0,
                lineHeight: 1.5,
            }
        }
        return (
            <div>
                <div style={{ display: 'flex' }}>
                    <i className="fas fa-graduation-cap" style={styles.icon}></i>
                    <h1 style={{ color: `${Theme[Mode].head}`, fontSize: 32, display: 'inline-block' }}>{Information[Language].title}</h1>
                </div>
                {
                    Information[Language].school.map((data, i) =>
                        <CardDetail key={i}>
                            <h2 style={styles.titleStyle}>{data.title}</h2>
                            <p style={styles.descriptionStyle}>{data.subTitle}</p>
                            {data.gpa !== null ? <p style={styles.gpaStyle}>{data.gpa}</p> : null}
                            <div style={{ display: 'flex', marginTop: 15 }}>
                                <i className="fas fa-calendar-alt" style={styles.iconDate}></i>
                                <p style={styles.dateStyle}>{data.date}</p>
                            </div>
                            {i === Information[Language].school.length - 1 ? null : <hr style={{ backgroundColor: `${Theme[Mode].hr}`, marginTop: -1 }} />}
                        </CardDetail>
                    )
                }
            </div>
        )
    }
}



export default Education