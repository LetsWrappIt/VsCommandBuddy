# Shortcut keys

Commands can be assigned shortcut key definitions. A shortcut can exist of one or two keys.
To define a shortcut key, 4 fields are available per command:
- key1
- mod1
- key2
- mod2

The 'key' fields contain a key, and the 'mod' fields contain one or more modifiers (ALT, CONTROL and SHIFT).

Shortcut key definitions are optional. If no shortcut is defined, the command can be selected by clicking the appropriate menu or toolbox item.

## Valid key values
- a, b, c, .. z
- 1, 2, 3, .. 0
- F1, F2, F3 .. F24
- Esc, home, PgDn, PgUp, End

## Valid modifier values
- CTRL
- ALT
- SHIFT

You can specify more than one modifier per key. Multiple modifiers need to be seperated by space.

## Examples:

### One key example
key1: F1
mod1: SHIFT ALT
Command is invoked by SHIFT-ALT-F1


### Two keys example:
key1: 1
mod1: CTRL SHIFT
key2: a
mod2: CTRL SHIFT
Command is invoked by pressing CTRL-SHIFT-1 followed by CTRL-SHIFT-a


## Duplicate shortcut definitions
If you define a shortcut key which already exists, Visual Studio simply ignores the definition. 
So, one limitation to take into account is to choose shortcuts which are not already in use.

