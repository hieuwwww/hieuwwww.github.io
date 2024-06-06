import PropTypes from 'prop-types'
export default function Student(props) {
    return (
        <div className='siu'>
            <h1> name :{props.name}</h1>
            <h1> age : {props.age}</h1>
            <h1> student : {props.isStudent ? "yes" : "no"} </h1>
        </div>
    );

}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
Student.defaultProps = {
    name: '',
    age: 0,
    isStudent: '',
}
