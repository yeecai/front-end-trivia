How to merge a specific file from another branch without other change?

```git checkout anotherRranch --patch theFile.xxx```

--patch in case you don't have theFile.xxx in your current branch

But by 'merge' it actually means overwrite, beware this will overwrite your current branch file with another branch file!
