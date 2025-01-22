**React Table with Dropdowns and Row Deletion**

This project is a React-based application that demonstrates a dynamic table with dropdowns and row deletion functionality. It includes:

1. Single-select dropdowns for Label 1.
2. Multi-select dropdowns with tags for Label 2.
3. The ability to add new options dynamically in Label 2.
4. The ability to add new row.
5. A delete button for each row to remove it from the table.

**Prerequisites**

Make sure you have the following installed:

Node.js (v14 or later)

npm (v6 or later) or yarn

**Getting Started**

Follow the steps below to set up and run the project locally:

1. Clone the Repository

git remote add origin https://github.com/Sravanikonapalli/table-cloudify-task.git

2. Navigate to the Project Directory

cd react-table-project

3. Install Dependencies

Install the required dependencies using npm or yarn:

*Using npm:*

npm install

*Using yarn:*

yarn install

4. Start the Development Server

Run the following command to start the development server:

*Using npm:*

npm start

*Using yarn:*

yarn start

5. Open the Application

Once the development server is running, open the browser and navigate to:

http://localhost:3000

The application will automatically reload if you make any edits to the code.

**Features**

*Single-select Dropdown (Label 1):*

Allows selecting one option from predefined options (e.g., HTML, CSS, JavaScript, ReactJs).

*Multi-select Dropdown with Tags (Label 2):*

Allows selecting multiple options with the ability to add new options dynamically.

*Add Row:*

Adds a new row with blank dropdowns.

*Delete Row:*

Removes a specific row using the delete button.

*Dynamic Option Addition:*

Enables users to add custom options to Label 2's dropdown.

**File Structure**

react-table-project/
├── public/
├── src/
│   ├── App.js          # Main component file
│   ├── App.css         # Styles for the application
│   └── index.js        # Application entry point
├── .gitignore
├── package.json        # Project metadata and dependencies
├── README.md           # Documentation (this file)
          

**Dependencies**

The project uses the following dependencies:

react: A JavaScript library for building user interfaces.

react-icons: Provides popular icon packs for React.



```jsx
// This is a single-line comment
const element = <h1>Hello, world!</h1>;

/* This is a multi-line comment */
const element2 = (
  <div>
    {/* This is a JSX comment */}
    <h1>Hello again!</h1>
  </div>
);
