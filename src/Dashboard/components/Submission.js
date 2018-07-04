import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import { List } from "immutable"
import { connect } from 'react-redux'
import * as formActions from "../../Form/actions"
import FileAttachedTable from './FileAttachedTable'


const formName = "Submission"
class Submission extends Component {

    constructor(props) {
        super(props)
        this.aList = List()
    }

    componentDidMount() {
        let { setInitialValues, workORderInfo } = this.props
        setInitialValues(formName, {})
        setInitialValues(formName, workORderInfo)
        this.aList = this.aList.clear()
    }

    onAttachRemove(index) {
        this.aList = this.aList.remove(index)
        this.forceUpdate()
    }

    onSubmit(e) {
        e.preventDefault()
        const fileData = this.aList.toJS()
        this.props.submmitedCallBack()
        console.log('-----ETTS--------', fileData)
    }

    onFileDrop(files) {
        files.forEach(file => {
            if (file['size'] > 0) {
                var reader = new window.FileReader()
                reader.onload = (function () {
                    var dataURL = reader.result
                    var droppedFile = {
                        file_name: file['name'],
                        file_type: file['type'],
                        file_size: file['size'] + '',
                        file_data: dataURL,
                        preview: file['preview'],
                        last_modified: file['lastModifiedDate']
                    }
                    this.aList = this.aList.set(this.aList.size, droppedFile)
                    this.forceUpdate()
                }).bind(this)
                reader.readAsDataURL(file)
            } else {
                // alert('Can`t attach 0 Bytes file')
            }

        })
    }

    render() {
        const onFileDrop = this.onFileDrop.bind(this)
        return (
            <div className='row'>
                <form onSubmit={this.onSubmit.bind(this)} className="float-label">
                    <div className='col-md-6'>
                        <Dropzone style={{ width: '100%', minHeight: '85px', border: '2px dashed rgb(102, 102, 102)', 'borderRadius': '5px' }} onDrop={onFileDrop}>
                            <div style={{ 'textAlign': 'center', 'paddingTop': '20%' }}>Drop files here, or click to select files to upload</div>
                        </Dropzone>
                    </div>
                    <div className='col-md-6'>
                        <FileAttachedTable fileList={this.aList} onRemoveClick={this.onAttachRemove.bind(this)} />
                    </div>
                    <div className="col-md-12 ">
                        <button type="submit" className="btn-danger pull-right">Submit</button>
                    </div>
                </form>

            </div>

        )
    }
}


function stateToProps(state) {
    return {
        currentValues: state.getIn(["Forms", formName, "currentValues"], List())
    }
}

export default connect(stateToProps, { ...formActions })(Submission)