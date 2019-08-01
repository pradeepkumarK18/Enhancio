import React from 'react';
import styled from 'styled-components';
import '../css/App.css';
import Switch from './switch';
import Hover from './hover';
import Draggable from 'react-draggable';

const Wrapper = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  color: grey;
  margin: 0 100px;
`;

const FieldsList = styled.div`
  display: block;
`;

const H2 = styled.h2`
  font-weight: 200;
`;

const H3 = styled.h3`
  font-weight: 200;
`;

const Field = styled.div`
  position: relative;
  width: 570px;
  margin-right: 30px;
  float: left;
  margin-bottom: 30px;
`;

const FieldInput = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;
  width: 100%;
  height: 30px;
  font-size: 14px;
  font-weight: 300;
`;

const FieldNumber = styled.span`
  position: absolute;
  top: 0px;
  right: 40px;
  color: lightgray;
`;

const FieldRemove = styled.span`
  position: absolute;
  top: 0px;
  right: 40px;
  color: lightgray;
  background: white;
  cursor: pointer;
  border: 1px solid;
`;

class App extends React.Component {
  
  componentDidMount() {
      this.props.fetchFields();
    }

    render() {

      const { fields } = this.props

      const fieldsList = [];

      for(let i =0; i<fields.length;i++) {
        console.log(fields[i])
        fieldsList.push(<Draggable><Field key={i}>
        <FieldInput type="text" placeholder={fields[i].fieldName}/>
        <Hover component1={<FieldNumber>{fields[i].order}</FieldNumber>} component2={<FieldRemove onClick={() => this.props.removeField(fields[i].order)}>X</FieldRemove>} />
        <Switch isChecked={(fields[i].mandatory === "Y" ? true : false)} />
      </Field></Draggable>)
      }

      return (
        <div>
          <Wrapper>
            <H2>Fields and Allowed Values</H2>
            <H3>Standard Fields</H3>
            <FieldsList>
              {fieldsList}
            </FieldsList>
          </Wrapper>
        </div>
      )
    }
}

export default App;