import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { saveSelection } from '../../../actions/agreement';
import Tooltip from '../Tooltip';
import styles from './styles.css';

export class Agreement extends Component {
    constructor (props) {
        super(props);

        this.state = {
            selection: null
        };

        this.highlight = this.highlight.bind(this);
        this.makeClick = this.makeClick.bind(this);
        this.zss_editor = {};
    }

    componentWillReceiveProps (nextProps) {
        //const agreement = document.querySelector('.agreement');
       //console.log(window.getSelection())
        //this.setSelectionRange (agreement, nextProps.selection.baseOffset, nextProps.selection.focusOffset);

    }

    makeEditableAndHighlight(colour) {
        var sel = window.getSelection();
        this.setState({ selection: sel })
        if (sel.rangeCount && sel.getRangeAt) {
            var range = sel.getRangeAt(0);
        }
        document.designMode = "on";

        if (range) {
            sel.removeAllRanges();
            sel.addRange(range);
        }

        if (!document.execCommand("HiliteColor", false, colour)) {
            document.execCommand("BackColor", false, colour);
        }

        document.designMode = "off";
    }

    makeClick () {
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(this.state.range);
        //console.log('here', this.zss_editor.currentSelection);
        document.execCommand("HiliteColor", false, '#222')
    }

    highlight(colour) {
        var selection = window.getSelection();
        var range = selection.getRangeAt(0);

        if (range.startOffset !== range.endOffset) {
            this.setState({ range: selection.getRangeAt(0).cloneRange() })
            this.zss_editor.currentSelection = selection.getRangeAt(0).cloneRange();
        }
    }

    render () {
        return (
            <div>
                <section className="agreement"
                         onMouseUp={this.highlight}>
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
                            <span onClick={this.makeClick} className="opener">Click to view audit trail</span>
                        </div>
                    </div>
                </section>
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
