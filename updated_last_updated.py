import subprocess
from datetime import datetime

# Get the latest commit date in ISO 8601 format
result = subprocess.run(['git', 'log', '-1', '--format=%cd', '--date=iso'], capture_output=True, text=True)
last_commit_date = result.stdout.strip()

# Format the date (optional)
formatted_date = datetime.strptime(last_commit_date, "%Y-%m-%d %H:%M:%S %z").strftime("%B %d, %Y %H:%M:%S %Z")

# Read the HTML file
with open("index.html", "r") as file:
    content = file.read()

# Update the "Last Updated" placeholder in the HTML
updated_content = content.replace("{{LAST_UPDATED}}", formatted_date)

# Write back to the file
with open("index.html", "w") as file:
    file.write(updated_content)

print(f"Updated 'Last Updated' timestamp to: {formatted_date}")
