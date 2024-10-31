// Subject arrays to store enrolled students
let DSA = [];
let PL = [];
let Networks = [];

// Function to display students in a given subject
function displayStudents(subject) {
    console.log(`Enrolled students in ${subject.name}: ${subject.list.join(", ")}`);
}

// Main function to handle enrollment operations
function manageEnrollment() {
    let subjectChoice;
    let operationChoice;

    while (true) {
        // Ask the user to choose a subject
        subjectChoice = prompt("Choose a subject:\n(A) DSA\n(B) PL\n(C) Networks\n(D) Exit");

        let selectedSubject;
        switch (subjectChoice.toUpperCase()) {
            case "A":
                selectedSubject = { name: "DSA", list: DSA };
                break;
            case "B":
                selectedSubject = { name: "PL", list: PL };
                break;
            case "C":
                selectedSubject = { name: "Networks", list: Networks };
                break;
            case "D":
                console.log("Exiting program...");
                console.log("Final lists of enrolled students per subject:");
                console.log("DSA:", DSA);
                console.log("PL:", PL);
                console.log("Networks:", Networks);
                return; // Exit program
            default:
                console.log("Invalid subject choice. Please select again.");
                continue;
        }

        // Subject operations loop
        while (true) {
            // Ask for an operation
            operationChoice = prompt(`Selected Subject: ${selectedSubject.name}\nChoose an operation:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit`);

            switch (operationChoice.toUpperCase()) {
                case "A": // Enroll
                    let studentToEnroll = prompt("Enter the name of the student to enroll:");
                    selectedSubject.list.push(studentToEnroll);
                    console.log(`${studentToEnroll} has been enrolled in ${selectedSubject.name}.`);
                    displayStudents(selectedSubject);
                    break;

                case "B": // Unenroll
                    if (selectedSubject.list.length === 0) {
                        console.log(`No students are currently enrolled in ${selectedSubject.name}.`);
                        break;
                    }
                    displayStudents(selectedSubject);
                    let studentToUnenroll = prompt("Enter the name of the student to unenroll:");
                    let index = selectedSubject.list.indexOf(studentToUnenroll);
                    if (index !== -1) {
                        selectedSubject.list.splice(index, 1);
                        console.log(`${studentToUnenroll} has been unenrolled from ${selectedSubject.name}.`);
                    } else {
                        console.log(`${studentToUnenroll} is not found in ${selectedSubject.name}.`);
                    }
                    displayStudents(selectedSubject);
                    break;

                case "C": // Select Another Subject
                    console.log("Returning to subject selection...");
                    break;

                case "D": // Exit program
                    console.log("Exiting program...");
                    console.log("Final lists of enrolled students per subject:");
                    console.log("DSA:", DSA);
                    console.log("PL:", PL);
                    console.log("Networks:", Networks);
                    return; // Exit program

                default:
                    console.log("Invalid operation. Please select again.");
                    continue;
            }

            // Break out of the operation loop if "Select Another Subject" was chosen
            if (operationChoice.toUpperCase() === "C") {
                break;
            }
        }
    }
}

// Run the enrollment management program
manageEnrollment();
