About git stash

- clear all stashes
        ```
        git stash clear
        ```

- list all stashes: 
        ```
        git stash list
        ```
- stash new file:
        ``` git stash --include-untracked ```
        
- restore change from stash: ``` git stash apply ```

- stash pop vs stash appli
        stash pop restore the state by remove the stash from the stash list
        stash apply restore the state(maybe a more accurate word) by copy the last stash, stash list you can still find the last stash 
