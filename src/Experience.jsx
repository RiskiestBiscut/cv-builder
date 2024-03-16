import InputGroup from "./InputGroup"

const Experience = ({value, onChange}) => {

    // school name, title of study and date of study
  return (
    <>
            <InputGroup
                type={"text"}
                id={"jobTitle"}
                label={"Job Title"}
                placeholder={"bing bong"}
                value={value.jobTitle}
                data-key={"jobTitle"}
                onChange={onChange}
            />
            <InputGroup
                type={"text"}
                id={"companyName"}
                label={"Company Name"}
                placeholder={"Company"}
                value={value.companyName}
                data-key={"companyName"}
                onChange={onChange}
            />
            <InputGroup
                type={"text"}
                id={"Date"}
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
             <InputGroup
                type={"textarea"}
                id={"description"}
                label={"Description"}
                placeholder={"lorem ipsum ..."}
                value={value.description}
                data-key={"description"}
                onChange={onChange}
            />
        </>
  )
}

export default Experience
