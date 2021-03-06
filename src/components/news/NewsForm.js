import React, { Component } from 'react'
import "../login/Login.css"

export default class NewsForm extends Component {

    state = {
        newsTitle: "",
        newsDate: "",
        newsURL: "",
        newsContent: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNews = evt => {
        evt.preventDefault()
        const news = {
            title: this.state.newsTitle,
            date: this.state.newsDate,
            URL: this.state.newsURL,
            Content: this.state.newsContent
        }

        this.props.addNews(news).then(() => this.props.history.push("/news"))
    }

    render() {

        return (
            <React.Fragment>
                <h2>News</h2>
                <hr />
                <form className="newsForm">
                    <div className="form-group">
                        <section className="titleField">
                            <label htmlFor="userID"></label>
                            <h5 htmlFor="newsTitle">News Title:</h5>
                            <p></p>
                            <input type="text" required="true"
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="newsTitle"
                                placeholder="News Title"
                                size="35" />
                        </section>
                    </div>
                    <p></p>
                    <div className="form-group">
                        <section>
                            <h5 htmlFor="newsDate">Date:</h5>
                            <input type="date" required="true"
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="newsDate" />
                            <h5 htmlFor="newsURL">News URL:</h5>
                            <input type="text" required="true"
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="newsURL"
                                placeholder="News URL" />
                        </section>
                    </div>
                    <div className="form-group">
                        <section className="contentField">
                            <p></p>
                            <h5 htmlFor="newsContent">News Content:</h5>
                            <p></p>
                            <textarea 
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="newsContent" 
                            placeholder="News Content Goes Here!" rows="5" cols="70"></textarea>
                        </section>
                    </div>
                    <p></p>
                    <button type="submit" onClick={this.constructNews} className="btn btn-primary">Post Article</button>
                </form>
            </React.Fragment>
        )
    }
}