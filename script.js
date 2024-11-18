<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manager's Dashboard</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Manager's Dashboard</h1>
    </header>
    <main>
        <!-- Task Creation Form -->
        <section id="task-creation">
            <h2>Create New Task</h2>
            <form id="taskForm">
                <label for="productName">Product Name:</label>
                <input type="text" id="productName" name="productName" required>

                <label for="category">Category:</label>
                <select id="category" name="category" required>
                    <option value="Artwork Approval">Artwork Approval</option>
                    <option value="CE Technical File Chapters for EndoSurgery">CE Technical File Chapters for EndoSurgery</option>
                    <option value="510(k) EndoSurgery">510(k) EndoSurgery</option>
                    <option value="CE Technical File Chapters for Healthcare">CE Technical File Chapters for Healthcare</option>
                    <option value="510(k) Healthcare">510(k) Healthcare</option>
                    <option value="QMS Setup">QMS Setup</option>
                    <option value="Risk Management and Usability">Risk Management and Usability</option>
                    <option value="Biocompatibility Testing and Biological Report">Biocompatibility Testing and Biological Report</option>
                    <option value="Clinical Documentation">Clinical Documentation</option>
                    <option value="PMS/PSUR">PMS/PSUR</option>
                    <option value="DCGI Related Work">DCGI Related Work</option>
                    <option value="Design File Preparation">Design File Preparation</option>
                </select>

                <label for="description">Task Description:</label>
                <textarea id="description" name="description" required></textarea>

                <label for="deadline">Deadline:</label>
                <input type="date" id="deadline" name="deadline" required>

                <button type="submit">Create Task</button>
            </form>
        </section>

        <!-- Task Overview Table -->
        <section id="task-overview">
            <h2>Task Overview</h2>
            <table id="taskTable">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Deadline</th>
                        <th>Assigned To</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Dynamic task rows will be inserted here -->
                </tbody>
            </table>
        </section>
    </main>
    <script src="script.js"></script>
</body>
</html>
