# GitHub Workflow Guide for New Users

This guide will help you learn how to use GitHub issues, branches, and pull requests to build functionality with the help of Claude Code.

## Table of Contents
- [What is Git and GitHub?](#what-is-git-and-github)
- [Understanding Issues](#understanding-issues)
- [Working with Branches](#working-with-branches)
- [Creating Pull Requests](#creating-pull-requests)
- [Using Claude Code](#using-claude-code)
- [Complete Workflow Example](#complete-workflow-example)

## What is Git and GitHub?

**Git** is a version control system that tracks changes to your code over time. It allows you to:
- Save snapshots of your code (called commits)
- Work on different versions of your code simultaneously (using branches)
- Collaborate with others without overwriting each other's work

**GitHub** is a web-based platform that hosts Git repositories and adds collaboration features like:
- Issues for tracking bugs and feature requests
- Pull requests for reviewing and merging code changes
- Actions for automating tasks

## Understanding Issues

Issues are GitHub's way of tracking tasks, bugs, feature requests, and discussions about your project.

### Creating an Issue

1. Navigate to your repository on GitHub
2. Click the "Issues" tab
3. Click "New Issue"
4. Add a descriptive title and detailed description
5. Optionally add labels (e.g., "bug", "enhancement", "documentation")
6. Assign the issue to yourself or team members
7. Click "Submit new issue"

### Issue Best Practices

- **Clear titles**: Use descriptive titles like "Add user authentication" instead of "Fix bug"
- **Detailed descriptions**: Explain what needs to be done and why
- **Steps to reproduce**: For bugs, include steps to reproduce the issue
- **Expected vs actual behavior**: Describe what should happen vs what actually happens
- **Screenshots**: Include images when helpful
- **Reference related issues**: Use `#123` to link to issue #123

### Example Issue

```
Title: Add dark mode toggle to settings page

Description:
Users have requested the ability to switch between light and dark themes.

Requirements:
- Add a toggle switch in the settings page
- Save the user's preference to localStorage
- Apply the theme across all pages
- Default to light mode for new users

Acceptance Criteria:
- [ ] Toggle switch visible in settings
- [ ] Theme persists after page reload
- [ ] All components support both themes
```

## Working with Branches

Branches allow you to work on different versions of your code simultaneously without affecting the main codebase.

### Branch Basics

The **main branch** (or `main`/`master`) is typically the production-ready code. You should never work directly on the main branch. Instead:

1. Create a new branch for each feature or bug fix
2. Make your changes on that branch
3. Merge the branch back into main when ready

### Creating a Branch

**Via Command Line:**
```bash
# Create and switch to a new branch
git checkout -b feature/add-dark-mode

# Or create a branch from a specific starting point
git checkout -b bugfix/login-error main
```

**Via GitHub Web Interface:**
1. Go to your repository
2. Click the branch dropdown (usually shows "main")
3. Type a new branch name
4. Click "Create branch"

### Branch Naming Conventions

Use clear, descriptive names that indicate the purpose:
- `feature/add-user-authentication`
- `bugfix/fix-login-redirect`
- `docs/update-readme`
- `refactor/simplify-database-queries`

Avoid generic names like `my-branch` or `test`.

### Working on Your Branch

```bash
# Check which branch you're on
git branch

# Switch to a different branch
git checkout feature/add-dark-mode

# Make changes to your files, then stage them
git add src/components/ThemeToggle.js

# Commit your changes
git commit -m "Add dark mode toggle component"

# Push your branch to GitHub
git push origin feature/add-dark-mode
```

## Creating Pull Requests

A Pull Request (PR) is a request to merge your branch's changes into another branch (usually `main`).

### Creating a Pull Request

1. Push your branch to GitHub
2. Navigate to your repository on GitHub
3. Click "Pull requests" tab
4. Click "New pull request"
5. Select your branch to merge from
6. Select the target branch (usually `main`)
7. Add a title and description
8. Click "Create pull request"

### Pull Request Best Practices

**Title**: Use a clear, concise description of what changed
- Good: "Add dark mode toggle to settings page"
- Bad: "Update files"

**Description**: Include:
- Summary of changes
- Why the changes were made
- How to test the changes
- Screenshots (if UI changes)
- Related issue numbers (e.g., "Closes #42")

**Example PR Description:**
```markdown
## Summary
Adds a dark mode toggle to the settings page, allowing users to switch between light and dark themes.

## Changes
- Created `ThemeToggle.js` component
- Added theme state management using Context API
- Implemented CSS variables for theme colors
- Updated all components to use theme-aware styles

## Testing
1. Navigate to Settings page
2. Toggle the dark mode switch
3. Verify theme changes across all pages
4. Refresh the page and verify theme persists

## Screenshots
[Include before/after images]

Closes #42
```

### Review Process

1. Team members review your code
2. They may request changes or approve
3. Address any feedback by pushing more commits to the same branch
4. Once approved, the PR can be merged

## Using Claude Code

Claude Code is an AI assistant that can help you write code, fix bugs, and complete GitHub-related tasks.

### Triggering Claude Code on Issues

You can ask Claude Code to work on an issue by mentioning it:

1. Open or create an issue
2. Add a comment mentioning `@claude` followed by your request
3. Claude Code will create a branch, implement the changes, and provide a PR link

**Example:**
```
@claude Please implement the dark mode toggle feature described in this issue.
```

### What Claude Code Can Do

- **Answer questions**: Ask about your codebase or how to implement features
- **Write code**: Request implementations of features or bug fixes
- **Review code**: Ask for feedback on code quality and potential issues
- **Create documentation**: Generate or update documentation files
- **Run tests**: Execute test suites and fix failing tests
- **Refactor code**: Improve code structure and readability

### What Claude Code Cannot Do

- Approve pull requests (for security reasons)
- Merge branches
- Modify GitHub Actions workflows
- Access external services or APIs

### Best Practices with Claude Code

**Be specific in your requests:**
- Good: "Add input validation to the login form to check for valid email format and minimum password length of 8 characters"
- Bad: "Fix the login form"

**Provide context:**
- Reference specific files or line numbers
- Explain what you've already tried
- Share error messages or screenshots

**Review Claude's work:**
- Always review the code Claude writes
- Test the changes thoroughly
- Request modifications if needed

### Example Claude Code Workflow

1. **Create an issue** describing what you need
   ```
   Title: Add email validation to registration form

   Description:
   The registration form currently accepts any email format. We need to:
   - Validate email format using regex
   - Show error message for invalid emails
   - Prevent form submission if email is invalid
   ```

2. **Tag Claude Code** in a comment
   ```
   @claude Please implement email validation as described above.
   ```

3. **Claude Code responds** with:
   - A checklist of tasks it will complete
   - Progress updates as it works
   - A link to create a pull request when done

4. **Review the PR** that Claude creates
   - Check the code changes
   - Test the functionality
   - Request changes if needed
   - Merge when satisfied

## Complete Workflow Example

Let's walk through a complete example of adding a new feature using issues, branches, PRs, and Claude Code.

### Scenario: Add a "Forgot Password" Feature

#### Step 1: Create an Issue

```
Title: Add forgot password functionality

Description:
Users need a way to reset their password if they forget it.

Requirements:
- Add "Forgot Password?" link on login page
- Create password reset request page
- Send reset email with secure token
- Create password reset form
- Token should expire after 1 hour

Acceptance Criteria:
- [ ] Forgot password link visible on login page
- [ ] User can request password reset via email
- [ ] Reset email contains secure, time-limited token
- [ ] User can set new password using valid token
- [ ] Expired tokens show appropriate error message
```

#### Step 2: Ask Claude Code to Help

Add a comment to the issue:
```
@claude Please implement the forgot password functionality described above.
Focus on security best practices for the reset tokens.
```

#### Step 3: Claude Code Works on It

Claude Code will:
1. Create a new branch (e.g., `claude/issue-5-20260204-1234`)
2. Implement the required changes
3. Commit and push the code
4. Provide a link to create a pull request

#### Step 4: Review the Pull Request

1. Click the PR link Claude provides
2. Review the code changes:
   - Check the implementation logic
   - Verify security measures (token generation, expiration)
   - Look for potential bugs or edge cases
3. Test the functionality locally:
   ```bash
   git fetch origin
   git checkout claude/issue-5-20260204-1234
   # Run the application and test the feature
   ```

#### Step 5: Request Changes (if needed)

If you find issues, comment on the PR:
```
The token expiration logic looks good, but could you add rate limiting
to prevent abuse of the password reset endpoint?
```

#### Step 6: Merge the Pull Request

Once everything looks good:
1. Click "Merge pull request"
2. Confirm the merge
3. Delete the branch (GitHub will prompt you)
4. Close the related issue if it's complete

## Tips for Success

### For Issues
- Create one issue per feature or bug
- Keep issues focused and specific
- Use labels to organize issues
- Link related issues using `#issue-number`
- Close issues when they're resolved

### For Branches
- Create a new branch for each issue
- Keep branches short-lived (merge quickly)
- Pull the latest changes from main before starting work
- Delete branches after merging

### For Pull Requests
- Keep PRs focused on a single feature or fix
- Write clear descriptions and include screenshots
- Respond promptly to review feedback
- Test your changes before requesting review
- Keep your branch up to date with main

### For Working with Claude Code
- Be specific and detailed in your requests
- Provide context about your project structure
- Review all code Claude generates
- Ask questions if you don't understand something
- Iterate with Claude to refine the implementation

## Common Git Commands Reference

```bash
# Check status of your working directory
git status

# Create and switch to a new branch
git checkout -b branch-name

# Switch to an existing branch
git checkout branch-name

# Stage changes for commit
git add filename
git add .  # Stage all changes

# Commit staged changes
git commit -m "Descriptive commit message"

# Push your branch to GitHub
git push origin branch-name

# Pull latest changes from remote
git pull origin main

# View commit history
git log

# See what changed in your files
git diff

# Discard changes to a file
git checkout -- filename
```

## Getting Help

- **GitHub Docs**: https://docs.github.com
- **Git Documentation**: https://git-scm.com/doc
- **Claude Code Documentation**: https://claude.ai/code
- **Ask Claude**: Tag `@claude` with your questions in issue comments

## Conclusion

You now have the knowledge to:
- Create and manage issues to track work
- Use branches to organize different features and fixes
- Create pull requests to review and merge changes
- Leverage Claude Code to accelerate development

The key to success is practice. Start with small changes, create issues for your ideas, ask Claude Code for help, and learn from the code reviews. Happy coding!
