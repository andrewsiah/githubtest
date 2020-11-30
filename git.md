3) “git clone {paste the url here}” <— In the terminal, go to the directory where you want to store the files locally and use this command

4) “git status” <— If you want to know the status of the file whether it is up to date or not

5) “git add {name of the file which is changed}” If you make changes and you want to add those changes to commit. (“git add -A” command to add all the files)

6) “git commit -m “{message you want to save with the commit}” ” <— use the command to commit all the changes in your local machine.

7) “git push” <— It will upload the files to GitHub server and you will see it on browser

8) “git pull” <— if you want to download all the files and changes in your local machine committed by other contributors.


Notes

git branch <branchname> : Makes a new pointer pointing at a certain branch
git checkout <branchname> : Changes my POV to the branchname
git commit <branchname> : Commits my changes to the branch

Shortcut to former 2 commands
git checkout -b <branchname> : Makes a new pointer, changes POV to it

git merge: Merge/Combine work from two different branches together

git rebase: Alternative to merge.
Takes a set of commits, "copies" them, and puts them down somewhere else 
+ve: Allows commit log to be a lot cleaner if only rebasing is allowed.

HEAD: Symbolic name for the currently checked out commit. IE What commit I'm working on top of.

hash: The Unique ID for every commit. Can use the shortform instead. EG fed2 instead of fed2da64c0efc5293610bdd892f82a58e8cbc5d8.
Git automatically identifies.

Relative refs: Instead of specifying commits by their hash, we start from somewhere memorable.
EG bugFix or HEAD. And move relative from there.

^ : Move upward one commit
~<num> : Move upward number of times

EG git checkout C3; git checkout HEAD^; git checkout HEAD^; git checkout HEAD^
or git checkoutC3^^^; Works the same
or git checkoutC3~3

git branch -f master HEAD~3: 
Branch forcing the branch named master to where 3 parents above where HEAD is. 
So next time we can simply refer to the master branch through <checkout master>

**Reversing Changes in Git**
git reset <branch<numoftimes>>: Moves a branch reference backwards in time. As if the current commit never made in first place
eg git reset HEAD~3

git revert <branch>: Makes a new commit with previous commit's content.
Then can use git push to share it with others. 
More for using with remote branches others are using. 

**Git moving around**
git cherry-pick <commit1> <commit2> : Copies a series of commits below my current location (HEAD)

git rebase -i HEAD~<num of layers>: Interactive rebase. Opens the VIM UI to show which commits to copy. 
pick: In rebase -i, we can pick off (omit) certain commits


### Pull from Remote Repositories
git -fetch: Does 2 things. 
1. Downloads the commits that the local repo is missing that the remote repo has
2. Updates where our remote branches point (eg origin/master)
IE: It syncs our local repo with the remote repo, by downloading the deltas when comparing remote and local repo.
BUT: It does **not** change the local state. Just merely downloads the differences. To change local state, we still need to manually merge/rebase.

git -pull: A shortcut to above. First fetches o/master and merges it with my master. It does those two directly with our master and origin/master

### Pushing to Remote Repositories
git -push: Pushes our work up to the remote repo

What if there is diverging history?
Assume that you pulled work down on monday, made some changes, and was ready to push it on friday. But your teamworks made some changes and now your previous history is outdated and there is a *diverged history* between your local repo and the remote repo. Git doesn't allow us to push the work up till we have a similar ancestor as that in the remote repo (ie: my local commits = the remote commits), or reverting the remote till it becomes Monday's version (rare, cause you'll be deleting all your friends' work)

git fetch; git rebase o/master; git push
To solve it, we first fetch the latest friday version to update our work, we then rebase our solo work on top of the o/master branch, then we push it. 

Or Shortcut: git pull --rebase

git pull; git push: Or we could use merge instead of rebase. Which will have our copy up to the remote repo.

