import React, { Component } from 'react'

import { Card, CardImage, CardInfo, CardContainer } from '../Card'

import Info from '../Info'
import Skill from '../Skill'
import Experience from '../Experience'
import Education from '../Education'
import Project from '../Project'

class Home extends Component {
    render() {
        return (
            <div id='home'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 col-sm-4">
                            <Card>
                                <CardImage>
                                    <img style={{ width: '100%' }} src="http://angsila.cs.buu.ac.th/~57160064/images/profile.JPG" alt="" />
                                </CardImage>
                                <CardInfo>
                                    <Info />
                                    <hr />
                                    <Skill />
                                </CardInfo>
                            </Card>
                        </div>
                        <div className="col-md-8 col-sm-8">
                            <div className="col-md-12" style={{ padding: 0 }}>
                                <Card>
                                    <CardContainer>
                                        <Experience />
                                    </CardContainer>
                                </Card>
                            </div>
                            <div className="col-md-12" style={{ padding: 0 }}>
                                <Card>
                                    <CardContainer>
                                        <Education />
                                    </CardContainer>
                                </Card>
                            </div>
                            <div className="col-md-12" style={{ padding: 0 }}>
                                <Card>
                                    <CardContainer>
                                        <Project />
                                    </CardContainer>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    name: {
        fontSize: 25,
        marginBottom: 15,
        letterSpacing: -1,
    },
    icon: {
        marginRight: 20,
        display: 'inline-block',
        color: '#3F68B5',
    }
}

export default Home