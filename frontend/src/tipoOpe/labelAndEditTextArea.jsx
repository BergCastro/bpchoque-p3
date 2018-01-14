import React from 'react'
import { connect } from 'react-redux'
import Grid from '../common/layout/grid'
import RichTextEditor from 'react-rte'


class LabelAndEditTextArea extends React.Component {

    state = {
        value: RichTextEditor.createEmptyValue()
    }

    onChange = (value) => {
        const { updateEfetivo } = this.props

        this.setState({value})
        updateEfetivo(value.toString('html'))
        
        
    }
    
    componentWillMount(){
        const { efetivoDescricao } = this.props
        this.setState({value: RichTextEditor.createValueFromString(efetivoDescricao, 'html')})
    }
    render() {
        
        const toolbarConfig = {
            // Optionally specify the groups to display (displayed in the order listed).
            display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
            INLINE_STYLE_BUTTONS: [
                { label: 'Bold', style: 'BOLD', className: 'custom-css-class' },
                { label: 'Italic', style: 'ITALIC' },
                { label: 'Underline', style: 'UNDERLINE' }
            ],
            BLOCK_TYPE_DROPDOWN: [
                { label: 'Normal', style: 'unstyled' },
                { label: 'Heading Large', style: 'header-one' },
                { label: 'Heading Medium', style: 'header-two' },
                { label: 'Heading Small', style: 'header-three' }
            ],
            BLOCK_TYPE_BUTTONS: [
                { label: 'UL', style: 'unordered-list-item' },
                { label: 'OL', style: 'ordered-list-item' }
            ]
        }
        const { cols, name, label, readOnly} = this.props
       
       
        return (

            <Grid cols={cols}>
                <div className='form-group'>
                    <label htmlFor={name}>{label}</label>
                    <RichTextEditor name={name}
                        value={this.state.value}
                        onChange={this.onChange} toolbarConfig={toolbarConfig}
                        readOnly={readOnly} />
                </div>
            </Grid>
        )
    }

}

const mapStateToProps = state => ({ efetivoDescricao: state.form.tipoOpeForm.values.efetivoDescricao })


export default connect(mapStateToProps, null)(LabelAndEditTextArea)