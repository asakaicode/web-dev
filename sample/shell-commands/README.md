# Shell Commands

This section covers basic shell commands that are essential for web development.

## Basic Commands

### `pwd`
Prints the current working directory.

```sh
pwd
```

### `ls`
Lists the files and directories in the current directory.

```sh
ls
```

### `cd`
Changes the current directory.

```sh
cd <directory>
```

### `mkdir`
Creates a new directory.

```sh
mkdir <directory>
```

### `rm`
Removes a file or directory.

```sh
rm <file>
```

### `cp`
Copies a file or directory.

```sh
cp <source> <destination>
```

### `mv`
Moves or renames a file or directory.

```sh
mv <source> <destination>
```

### `touch`
Creates a new empty file.

```sh
touch <file>
```

### `echo`
Prints a message to the terminal or writes it to a file.

```sh
echo "Hello, World!"
```

### `cat`
Displays the contents of a file.

```sh
cat <file>
```

### `grep`
Searches for a pattern in a file.

```sh
grep <pattern> <file>
```

### `find`
Searches for files and directories.

```sh
find <directory> -name <pattern>
```

### `chmod`
Changes the permissions of a file or directory.

```sh
chmod <permissions> <file>
```

### `chown`
Changes the owner of a file or directory.

```sh
chown <owner> <file>
```

### `ps`
Displays information about running processes.

```sh
ps
```

### `kill`
Terminates a process.

```sh
kill <pid>
```

### `man`
Displays the manual for a command.

```sh
man <command>
```

## Advanced Commands

### `tar`
Creates or extracts archives.

```sh
tar -cvf <archive.tar> <files>
tar -xvf <archive.tar>
```

### `wget`
Downloads files from the internet.

```sh
wget <url>
```

### `curl`
Transfers data from or to a server.

```sh
curl <url>
```

### `ssh`
Connects to a remote server.

```sh
ssh <user>@<host>
```

### `scp`
Copies files between hosts.

```sh
scp <source> <destination>
```

### `rsync`
Synchronizes files and directories between two locations.

```sh
rsync <source> <destination>
```

### `df`
Displays disk space usage.

```sh
df -h
```

### `du`
Displays disk usage of files and directories.

```sh
du -h <directory>
```

### `top`
Displays real-time information about running processes.

```sh
top
```

### `htop`
An interactive process viewer.

```sh
htop
```

### `nano`
A simple text editor.

```sh
nano <file>
```

### `vim`
A powerful text editor.

```sh
vim <file>
```

### `git`
A version control system.

```sh
git init
git clone <repository>
git add <file>
git commit -m "message"
git push
git pull
```

### `docker`
A platform for developing, shipping, and running applications in containers.

```sh
docker build -t <image> .
docker run -d <image>
docker ps
docker stop <container>
```

### `kubectl`
A command-line tool for interacting with Kubernetes clusters.

```sh
kubectl get pods
kubectl create -f <file>
kubectl delete pod <pod>
```
