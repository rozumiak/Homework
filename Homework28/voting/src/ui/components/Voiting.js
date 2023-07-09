import React from "react";
import js_img from "../../img/js.PNG";
import php_img from "../../img/php.PNG";
import python_img from "../../img/python.PNG";

class Voting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            languages: [
                { id: 1, name: js_img, count: 0 },
                { id: 2, name: php_img, count: 0 },
                { id: 3, name: python_img, count: 0 },
            ],
            showResults: false,

        };
    }

    handleVote = (id) => {
        this.setState((prevState) => ({
            languages: prevState.languages.map((lang) =>
                lang.id === id ? { ...lang, count: lang.count + 1 } : lang
            ),
        }));
    };

    handleShowResults = () => {
        this.setState({ showResults: true });
    };

    getWinningSmiley = () => {
        const { languages } = this.state;
        const maxCount = Math.max(...languages.map((lang) => lang.count));
        return <img src={languages.find((lang) => lang.count === maxCount)?.name} alt=""/>
    };

    render() {
        const { languages, showResults } = this.state;
        return (
            <div>
                <h2>Vote for your favorite language</h2>
                {languages.map((lang) => (
                    <div key={lang.id}>
                        <span><img src={lang.name} alt="" onClick={() => this.handleVote(lang.id)}/></span>
                        <span>{lang.count}</span>
                    </div>
                ))}
                <button onClick={this.handleShowResults}>Show Results</button>
                {showResults && (
                    <div>
                        <h3>Winning:</h3>
                        <span>{this.getWinningSmiley()}</span>
                    </div>
                )}
            </div>
        );
    }


}

export default Voting;
