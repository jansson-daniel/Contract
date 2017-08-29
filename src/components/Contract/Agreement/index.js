import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { saveSelection } from '../../../actions/agreement';
import { copyToClipboard } from '../../../actions/tooltip';
import Tooltip from '../Tooltip';
import styles from './styles.css';

export class Agreement extends Component {
    constructor (props) {
        super(props);

        this.state = {
            selection: null
        };

        this.saveSelection = this.saveSelection.bind(this);
        this.highlightSelection = this.highlightSelection.bind(this);
    }

    componentWillReceiveProps (nextProps) {
        // const agreement = document.querySelector('.agreement');
        // console.log(window.getSelection())
        // this.setSelectionRange (agreement, nextProps.selection.baseOffset, nextProps.selection.focusOffset);

    }

    highlightSelection () {
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(this.state.range);
        this.props.dispatch(copyToClipboard(false));
    }

    saveSelection () {
        const selection = window.getSelection();
        const  range = selection.getRangeAt(0);

        this.props.dispatch(copyToClipboard(false));

        if (range.startOffset !== range.endOffset) {
            const range = selection.getRangeAt(0).cloneRange();
            this.props.dispatch(saveSelection(range));
            this.setState({ range });
        }
    }

    render () {
        return (
            <div>
                <section className="agreement"
                         onMouseUp={this.saveSelection}>
                    <h1 className='headline'>Offer terms</h1>
                    <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque eu eros in gravida.
                        Aliquam sit amet ultrices nibh, ut volutpat ipsum. Ut pulvinar varius bibendum. Mauris euismod,
                        enim quis accumsan gravida, tortor leo vulputate dolor, in aliquet eros ipsum in justo. Curabitur
                        consectetur risus et aliquet finibus. In porttitor cursus sem a iaculis. Curabitur tempus erat vel
                        massa aliquet commodo. Quisque vel feugiat mauris. Sed orci erat, eleifend non gravida et, suscipit
                        sit amet velit. Vivamus id pellentesque neque, sodales sollicitudin mi. Donec dignissim pharetra
                        metus, eget tempor lectus pellentesque ac. Etiam vulputate, nulla ac vestibulum euismod, felis nulla
                        tempus sapien, at fringilla est nulla ut metus. Aliquam nisl nibh, placerat ac nulla nec, commodo
                        convallis est.
                    </p>
                    <p className="paragraph">
                        Nullam elementum arcu id mattis consequat. Nunc nec nunc et nisl porta placerat. Vivamus id eros et
                        orci pretium posuere quis et lorem. Donec sodales arcu et auctor suscipit. Fusce maximus auctor metus
                        et iaculis. Aenean pellentesque orci id ante vestibulum consectetur. Etiam dictum dignissim enim,
                        a tempus est gravida ac. Nunc cursus, orci non hendrerit egestas, magna odio congue nunc, sed volutpat
                        ligula purus at nulla. Sed accumsan venenatis facilisis. Praesent dignissim diam eu cursus pharetra.
                        Etiam convallis eros sed est vulputate, ac efficitur dui sollicitudin. Nulla sit amet libero ut odio
                        ultrices ullamcorper.
                    </p>
                    <div className="audit-trail">
                        <h2 className="sub-heading">Audit trail</h2>
                        <div className="content">
                            <span onClick={this.highlightSelection} className="opener">Click to view audit trail</span>
                        </div>
                    </div>
                </section>
                <Tooltip />
            </div>
        )
    }
}

Agreement.propTypes = {
    dispatch: PropTypes.func
};

function mapStateToProps (state) {
    return {
        selection: state.agreement.selection
    }
}

export default connect(mapStateToProps)(Agreement)
