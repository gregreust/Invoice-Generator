import {useState} from 'react'
import axios from 'axios'


const AddStudent  = () => {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [instrument, setInstrument] = useState();
    const [teacher, setTeacher] = useState();
    const [lessonDay, setLessonDay] = useState("");
    const [parentName, setParentName] = useState();
    // CHECK INPUT FORMAT FOR DJANGO ADRESSFIELD
    // const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    
    function handleSubmit (e) {
        e.preventDefault();
        postData();
    }

    async function postData () {
        let newStudentObject = {
            first_name: fName,
            last_name: lName,
            instrument: instrument,
            teacher: teacher,
            lesson_day: lessonDay,
            parent_name: parentName,
            phone: phone,
            email: email
        }
        await axios.post('')
    }

    return ( 
        <div className="addstudent-container">
            <form>
                <input type='text' value={fName} onChange={() => setFName()} placeholder='First Name'/>
                <input type="text" value={lName} onChange={() => setLName()} placeholder="Last Name"/>
                <select value={instrument} onChange={() => setInstrument()} placeholder="Instrument">
                    <option>Piano</option>
                    <option>Violin</option>
                    <option>Guitar</option>
                    <option>Cello</option>
                    <option>Drums</option>
                    <option>Flute</option>
                </select>
                {/* FOR LATER: MAKE TEACHER SELECT WITH DYNAMIC OPTIONS PULLED FROM DATABASE */}
                <input type="text" value={teacher} onChange={() => setTeacher()} placeholder="Teacher Name"/> 
                <select value={lessonDay} onChange={() => setLessonDay()} placeholder="Lesson Day">
                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wednesay</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                    <option>Saturday</option>
                    <option>Sunday</option>
                </select>
                <input type="text" value={parentName} onChange={() => setParentName()} placeholder="Parent Name"/>
                <input type="tel" value={phone} onChange={() => setPhone()} placeholder="Phone Number"/>
                <input type="email" value={email} onChange={() => setEmail()} placeholder="Email"/>
                <button type="submit" onClick={() => handleSubmit()}>Add Student Info</button> 
            </form> 

        </div>
    );
}
 
export default AddStudent;