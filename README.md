# Discord Bot
###  Branching in this project

This sections aims at describing all the branches to best possible extinct
(Assuming you know how branches work generally in git)
#### Branches in NGITOSS/discord-bot


- ``main`` : The main branch is the branch the which will probably be used for deployment as has the **production code** on it in which everything is bug-free and is working
- ``develop`` : The develop branch is the branch on which current development goes on and **all the PR's are merged here** so make sure you are pushing to the right branch when you are making the PR .(*Details discussed later)*.
#### Branches in your GitHub Repository (The forked Repo)
- ``main `` : A copy of the main branch in your own repository .
- DO NOT COMMIT DIRECTLY TO MAIN
- ``develop`` : A copy of the main branch in your repository . 
- This must be kept up to date..
-   This is the branch you will merge your code into 
- ``<working-branch>`` : Working branch is the branch that you actually work on.
- Meaning this branches off of the develop branch and you do actual work on this branch.
- Once you finish implementing a feature or resolving a bug you must make a commit on this branch and then merge it with the develop branch.
- Then make a PR with this branch to main repo like
- `` username/discord-bot :: develop branch ==>  NGITOSS/discord-bot :: develop branch ``
### Contributions
Checkout [CONTRIBUTIONS.md](CONTRIBUTIONS.md) for details on contributing to this projecttt.
