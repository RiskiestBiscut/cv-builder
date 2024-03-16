import InputGroup from "./InputGroup"

const Education = ({value, onChange}) => {

    // school name, title of study and date of study
  return (
    <>
            <InputGroup
                type={"text"}
                id={"schoolName"}
                label={"School Name"}
                placeholder={"University of Dingle bops"}
                value={value.schoolName}
                data-key={"schoolName"}
                onChange={onChange}
            />
            <InputGroup
                type={"text"}
                id={"degree"}
                label={"Degree"}
                placeholder={"BA in History"}
                value={value.degree}
                data-key={"degree"}
                onChange={onChange}
            />
            <InputGroup
                type={"text"}
                id={"date"}
                label={"Date"}
                placeholder={"2020-2024"}
                value={value.date}
                data-key={"date"}
                onChange={onChange}
            />
            <InputGroup
                type={"text"}
                id={"location"}
                label={"Location"}
                placeholder={"Toronto, ON"}
                value={value.location}
                data-key={"location"}
                onChange={onChange}
            />
        </>
  )
}

export default Education
