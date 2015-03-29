var notes = new noca();
notes.update("lorem", "foobar");
notes.setStandard("lorem", "42");
notes.update("lorem", "99");
notes.reset("lorem");
notes.remove("lorem");