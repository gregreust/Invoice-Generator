import {useState} from 'react'
import axios from 'axios'
import { BASE_URL } from '../../../LocalData'


const AddStudent  = () => {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [instrument, setInstrument] = useState("");
    const [teacher, setTeacher] = useState("");
    const [lessonDay, setLessonDay] = useState("");
    const [parentName, setParentName] = useState("");
    // CHECK INPUT FORMAT FOR DJANGO ADRESSFIELD
    // const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    
    function handleSubmit (e) {
        e.preventDefault();
        postData();
    }

    async function postData() {
        let newStudentObject = {
            first_name: fName,
            last_name: lName,
            instrument: instrument,
            teacher: teacher,
            lesson_day: lessonDay,
            parent_name: parentName,
            phone: phone,
            email: email
        };
        await axios.post(`${BASE_URL}/api/students/`, newStudentObject);
        console.log("Data was posted");
    }

    return ( 
        <div className="addstudent-container">
            <form>
                <input type='text' value={fName} onChange={(e) => setFName(e.target.value)} placeholder='First Name'/>
                <input type="text" value={lName} onChange={(e) => setLName(e.target.value)} placeholder="Last Name"/>
                <select value={instrument} onChange={(e) => setInstrument(e.target.value)} placeholder="Instrument">
                    <option>Piano</option>
                    <option>Violin</option>
                    <option>Guitar</option>
                    <option>Cello</option>
                    <option>Drums</option>
                    <option>Flute</option>
                </select>
                {/* FOR LATER: MAKE TEACHER SELECT WITH DYNAMIC OPTIONS PULLED FROM DATABASE */}
                <input type="text" value={teacher} onChange={(e) => setTeacher(e.target.value)} placeholder="Teacher Name"/> 
                <select value={lessonDay} onChange={(e) => setLessonDay(e.target.value)} placeholder="Lesson Day">
                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wednesay</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                    <option>Saturday</option>
                    <option>Sunday</option>
                </select>
                <input type="text" value={parentName} onChange={(e) => setParentName(e.target.value)} placeholder="Parent Name"/>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number"/>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                <button type="submit" onClick={(e) => handleSubmit(e)}>Add Student Info</button> 
            </form> 

        </div>
    );
}
 
export default AddStudent;