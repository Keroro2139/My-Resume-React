import React, { Component } from 'react'

const Theme = {
    lightTheme: {
        head: '#202020',
        position: '#202020',
        icon: '#3F68B5',
        text: '#666666',
        hr: '#E5E5E5',
    },
    darkTheme: {
        head: '#E2E2E2',
        position: '#E2E2E2',
        icon: '#E41E26',
        text: '#E7E7E7',
        hr: '#5F5F5F',
    }
}
const Information = {
    TH: {
        name: 'วีรพัฒน์ จุฬเกตุ (อ๊บ)',
        address: '98/2 หมู่ 4 ต.บ้านบึง อ.บ้านบึง จ.ชลบุรี ประเทศไทย 20170',
        dateOfBirth: '21 มีนาคม 2539'
    },
    EN: {
        name: 'Weerapat Chulaket (aob)',
        address: '98/2 Moo 4, Banbung, Banbung, Chonburi, Thailand 20170.',
        dateOfBirth: '21 Mar, 1996'
    }
}

class Info extends Component {
    render() {

        const { changed } = this.props
        const Mode = changed.changed
        const Language = changed.language

        const styles = {
            name: {
                fontSize: 30,
                fontWeight: 'bold',
                marginBottom: 0,
                textTransform: 'uppercase',
                letterSpacing: -1,
                color: `${Theme[Mode].head}`,
            },
            position: {
                fontSize: 28,
                marginBottom: 30,
                letterSpacing: 1,
                color: `${Theme[Mode].position}`,
            },
            icon: {
                marginRight: 20,
                display: 'inline-block',
                color: `${Theme[Mode].icon}`,
                fontSize: 18,
            },
            flex: {
                display: 'flex',
            },
            detailStyle: {
                fontSize: 22,
                display: 'inline-block',
                color: `${Theme[Mode].text}`,
                lineHeight: 1,
            }
        }
        return (
            <div>
                <h1 style={styles.name}>{Information[Language].name}</h1>
                <h3 style={styles.position}>Cloud Developer Engineer</h3>
                <div style={styles.flex}>
                    <i className="fas fa-home" style={styles.icon}></i>
                    <p style={styles.detailStyle}>{Information[Language].address}</p>
                </div>
                <div style={styles.flex}>
                    <i className="fas fa-phone" style={styles.icon}></i>
                    <p style={styles.detailStyle}>098-3406169</p>
                </div>
                <div style={styles.flex}>
                    <i className="fas fa-envelope" style={styles.icon}></i>
                    <p style={styles.detailStyle}>shallows.w@gmail.com</p>
                </div>
                <div style={styles.flex}>
                    <i className="fas fa-birthday-cake" style={styles.icon}></i>
                    <p style={styles.detailStyle}>{Information[Language].dateOfBirth}</p>
                </div>
                <div style={styles.flex}>
                    <i className="fab fa-github" style={styles.icon}></i>
                    <a href="https://github.com/Keroro2139" target='blank'>
                        <p style={styles.detailStyle}>https://github.com/Keroro2139</p>
                    </a>
                </div>
                <hr style={{ backgroundColor: `${Theme[Mode].hr}` }} />
            </div>
        )
    }
}



export default Info