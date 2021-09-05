# Module federation with NX and angular

### Create NX Workspace

```bash
npx create-nx-workspace <workspace-name>
```

### Install Angular schematics

```bash
npm install @nrwl/angular
```

### Generate host App

```bash
nx g @nrwl/angular:app <host-app-name> --mfe --mfeType=host --routing --style=scss
```

### Generate remote App

```bash
nx g @nrwl/angular:app <remote-app-name> --mfe --mfeType=remote --routing --style=scss --port=4201 --host=<host-app-name>
```

### Run all Apps

```bash
nx serve-mfe
```
