import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import IF from '../common/operator/if'


import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import { init, create, update, remove } from './oficioActions'


import List from './oficioList'
import Form from './oficioForm'

class Oficio extends Component {
    state = {
        loading: false
    }

    updateList = (event) => {
        event.preventDefault()
       
        this.props.init()
    }

    

    componentWillMount() {

        this.props.init()

    }
    styleButtonUpdate = {
        marginTop: '7px'
    }
   

    render() {
        const { tabSelected } = this.props
        return (
            <div>
                <ContentHeader title='Oficios' small='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
                            <IF test={tabSelected === 'tabList'}>
                            <button type="button"
                                    class="btn btn-link" 
                                    style={this.styleButtonUpdate}
                                    onClick={this.updateList}>Atualizar</button>
                            </IF>
                                
                            
                            
                            

                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <List />
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Form onSubmit={this.props.create}
                                    submitLabel='Incluir' submitClass='primary' />
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <Form onSubmit={this.props.update}
                                    submitLabel='Alterar' submitClass='info' />
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <Form onSubmit={this.props.remove} readOnly={true}
                                    submitLabel='Excluir' submitClass='danger' />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}
const mapStateToProps = state => ({
     tabSelected: state.tab.selected
})
const mapDispatchToProps = dispatch => bindActionCreators({
    init, create, update, remove,
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Oficio)