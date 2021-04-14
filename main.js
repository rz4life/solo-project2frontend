let africa = 0;
let europe = 0;
let asia = 0;
let americas = 0;

let resultName

let category = ['Music','Food', 'Culture', "Activities"]

let asianMusic= [ "https://images.unsplash.com/photo-1599057164474-3161aa013c31?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw3MDU1MzYwMXx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1546415837-fa24d2ff108d?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3MDU1MzYwMXx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"]
let africanMusic  = ["https://images.unsplash.com/photo-1505147634308-9b83c4cb46b4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzMzA3ODAzNXx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1540247110674-31e928ee852a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwzMzA3ODAzNXx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"] 
let europeanMusic  = ["https://images.unsplash.com/photo-1508521049563-61d4bb00b270?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0ODg2NjA4OXx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1551236015-dc372b14db22?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw0ODg2NjA4OXx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"]
let americanMusic  = ["https://images.unsplash.com/photo-1578946956271-e8234ecaaadd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0Nzg5MDUzOXx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw0Nzg5MDUzOXx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"]

let asianFood = [ "https://images.unsplash.com/photo-1532347231146-80afc9e3df2b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxOTE3NDI2N3x8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1597756900769-93ff22ca7c66?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxOTE3NDI2N3x8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1542990254-7174ee186dd1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxOTE3NDI2N3x8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1503764654157-72d979d9af2f?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnwxOTE3NDI2N3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"]
let africanFood  = ["https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXwyNTY0MjQ1NHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1611712142269-12b7433e28e9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwyNTY0MjQ1NHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1611712141499-e1921675b032?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wyNTY0MjQ1NHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1570275239925-4af0aa93a0dc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTY0MjQ1NHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"] 
let europeanFood  = ["https://images.unsplash.com/photo-1548940740-204726a19be3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0NTk4OTQwNnx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw0NTk4OTQwNnx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1603570416072-84068a0f1358?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw0NTk4OTQwNnx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w0NTk4OTQwNnx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"]
let americanFood  = ["https://images.unsplash.com/photo-1564759192062-31bcf1206f7a?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw1ODM4NjE4N3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1583953623787-ada99d338235?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXw1ODM4NjE4N3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" ,"https://images.unsplash.com/photo-1562457346-c1d10d9dee52?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXw1ODM4NjE4N3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1536184071535-78906f7172c2?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw1ODM4NjE4N3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"]

let asianculture = [ "https://images.unsplash.com/photo-1542897644-e04428948020?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXwzNDQ1NTgzM3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1616901813651-5e72edc3abfd?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3wzNDQ1NTgzM3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1606327785204-e3643c3ae3be?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wzNDQ1NTgzM3x8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1533551268962-824e232f7ee1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzNDQ1NTgzM3x8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1616901945149-47f7eac169cb?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHwzNDQ1NTgzM3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"]
let africanculture  = ["https://images.unsplash.com/photo-1515658323406-25d61c141a6e?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8ODg5ODYyNTl8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1522168709594-942fcde3d332?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8ODg5ODYyNTl8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1515657241610-a6b33f0f6c5a?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXw4ODk4NjI1OXx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1552710307-537199cd41c0?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Nnw4ODk4NjI1OXx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1603204706646-6d358a00768d?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w4ODk4NjI1OXx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"] 
let europeanculture  = ["https://images.unsplash.com/photo-1525874684015-58379d421a52?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wzMjY3NTc2OHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1529154166925-574a0236a4f4?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzMjY3NTc2OHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1598791436783-3bd15b5bf73d?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwzMjY3NTc2OHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1564959130747-897fb406b9af?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3wzMjY3NTc2OHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1542820229-081e0c12af0b?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwzMjY3NTc2OHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"]
let americanculture  = ["https://images.unsplash.com/photo-1539056508925-ac839ab1d69a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3MjA4MjU4Mnx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1542835435-4fa357baa00b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3MjA4MjU4Mnx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" ,"https://images.unsplash.com/photo-1520821586179-a7a385eb261a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw3MjA4MjU4Mnx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1559760434-0981df057e83?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXw3MjA4MjU4Mnx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw3MjA4MjU4Mnx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"]

let asianActivities = [ "https://images.unsplash.com/photo-1494588024300-e9df7ff98d78?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw0MjQxOTk4NXx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1493515114968-cd0f4e52bf18?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0MjQxOTk4NXx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1506781961370-37a89d6b3095?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw0MjQxOTk4NXx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1513415564515-763d91423bdd?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3w0MjQxOTk4NXx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1528397659400-9da613e72579?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w0MjQxOTk4NXx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"]
let africanActivities  = ["https://images.unsplash.com/photo-1528277342758-f1d7613953a2?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXw2MDc0NTY3MHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1519594445471-0e5f86b3fb09?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw2MDc0NTY3MHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1547970810-dc1eac37d174?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw2MDc0NTY3MHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHw2MDc0NTY3MHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Nnw2MDc0NTY3MHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"] 
let europeanActivities  = ["https://images.unsplash.com/photo-1491900177661-4e1cd2d7cce2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw5MTM5NzA1NXx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw5MTM5NzA1NXx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1431274172761-fca41d930114?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Nnw5MTM5NzA1NXx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1610923564181-fe649693c434?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3w5MTM5NzA1NXx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXw5MTM5NzA1NXx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"]
let americanActivities  = ["https://images.unsplash.com/photo-1543439118-b5297adc9512?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w1Njk2OTg0M3x8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1547995886-6dc09384c6e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw1Njk2OTg0M3x8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" ,"https://images.unsplash.com/photo-1515898698999-18f625d67499?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw1Njk2OTg0M3x8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1554216564-3b2db87a49d1?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXw1Njk2OTg0M3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1565687755642-e8ecb59cc267?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw1Njk2OTg0M3x8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"]

let Imgmusic = {asianMusic, africanMusic,europeanMusic, americanMusic}
let ImgFood = {asianFood, africanFood,europeanFood, americanFood}
let Imgculture = {asianculture, africanculture,europeanculture, americanculture}
let ImgActivities = {asianActivities, africanActivities,europeanActivities, americanActivities}

let categoryImg = {Imgmusic,ImgFood, Imgculture, ImgActivities}

document.querySelector('#signup-link').addEventListener('click', ()=>{
    document.querySelector('#signUpScreen').classList.remove('hidden')
    document.querySelector('.home-page').classList.add('hidden')
    document.querySelector('#loginScreen').classList.add('hidden')
})
document.querySelector('#login-link').addEventListener('click', ()=>{
    document.querySelector('.home-page').classList.add('hidden')
    document.querySelector('#loginScreen').classList.remove('hidden')
    document.querySelector('#signUpScreen').classList.add('hidden')
})
document.querySelector('.signup-form').addEventListener('submit', async(event) =>{
    event.preventDefault()
    const firstnameV = document.querySelector('#signup-firstname').value
    const lastnameV = document.querySelector('#signup-lastname').value
    const emailV = document.querySelector('#signup-email').value
    const passwordV = document.querySelector('#signup-password').value

    try {
        const response = await axios.post('http://localhost:3011/users',{
            firstname: firstnameV,
            lastname: lastnameV,
            email: emailV,
            password: passwordV
        })
        const userId = response.data.user.id 
        localStorage.setItem('userId', userId)
        console.log(response.data.user.id)
        let userName = document.querySelector('.user-name')
        document.querySelector('#screen').classList.remove('hidden')
        userName.innerText = `Welcome ${response.data.user.firstname}`
        document.querySelector('#dashboardScreen').classList.remove('hidden')
        document.querySelector('.home-page').classList.add('hidden')
        document.querySelector('#signUpScreen').classList.add('hidden')
        document.querySelector('#loginScreen').classList.add('hidden')
    } catch (error) {
        console.log(error)
        alert('name and email already taken')   
    }
})
document.querySelector('.login-form').addEventListener('submit', async(event) =>{
    event.preventDefault()
    

    const emailV = document.querySelector('#login-email').value
    const passwordV = document.querySelector('#login-password').value
    let response;
    try {
        response = await axios.post('http://localhost:3011/users/login',{
           email: emailV,
           password: passwordV
       })
       const userId = response.data.user.id 
       localStorage.setItem('userId', userId)
    if (response.data.message === 'login successful'){
       let userName = document.querySelector('.user-name')
       userName.innerText = `Welcome back ${response.data.user.firstname}`
       document.querySelector('#screen').classList.remove('hidden')

       document.querySelector('#dashboardScreen').classList.remove('hidden')
       document.querySelector('.home-page').classList.add('hidden')
       document.querySelector('#signUpScreen').classList.add('hidden')
       document.querySelector('#loginScreen').classList.add('hidden')
   }else{
       alert('email or password is incorrect')
   }
   } catch (error) {
       console.log(error)
       alert('email or password is incorrect') 
   }
})


let formcount1 = 0;
const music = document.querySelector(("input[name=Music]"))
music.addEventListener('change', ()=>{
    if(formcount1 === 0){
        console.log("you clicked it")
             africa = africa + 2;
             europe = europe + 2;
             asia =  asia + 1;
             americas = americas + 3;
             formcount1 = 1;
    }else if(formcount1 === 1) {
        console.log("you unclicked it")
        africa = africa - 2;
        europe = europe - 2;
        asia =  asia - 1;
        americas = americas - 3;
        formcount1 = 0
    }
})

let formcount2 = 0;
const food = document.querySelector(("input[name=Food]"))
food.addEventListener('change', ()=>{

    if(formcount2 === 0){
        console.log("you clicked it")
        africa = africa + 1;
        europe = europe + 3;
        asia = asia + 2;
        americas = americas + 1;
        formcount2 = 1;
    }else if(formcount2 === 1){
        console.log("you unclicked it")
        africa = africa - 1;
        europe = europe - 3;
        asia = asia - 2;
        americas = americas - 1;
        formcount2 = 0;
    }
})

let formcount3 = 0;
const culture = document.querySelector(("input[name=Culture]"))
culture.addEventListener('change', ()=>{
        if(formcount3 === 0){
            console.log("you clicked it")
            africa =  africa + 3;
            europe =  europe + 2;
            asia = asia + 2;
            americas = americas + 3;
            formcount3 = 1;
        }else if(formcount3 === 1){
            console.log("you unclicked it")
            africa =  africa - 3;
            europe =  europe - 2;
            asia = asia - 2;
            americas = americas - 3;
            formcount3 = 0;
        }
        
})

let formcount4 = 0;
const activities = document.querySelector(("input[name=Activities]"))
activities.addEventListener('change', ()=>{
        if(formcount4 === 0){
            console.log("you clicked it")
            africa = africa + 1;
            europe = europe + 2;
            asia = asia + 2;
            americas = americas + 3;
            formcount4 = 1;

        }else if(formcount4 === 1){
            console.log("you unclicked it")
            africa = africa - 1;
            europe = europe - 2;
            asia = asia - 2;
            americas = americas - 3;
            formcount4 = 0;
        }
})
let click = 0;
let Imgclick1 = 0;
let Imgclick2 = 0;
let Imgclick3 = 0;
let Imgclick4 = 0;

let africaImg = document.querySelector('.africa_img')
africaImg.addEventListener('click',  () =>{
    if (click === 2 && Imgclick1 === 0){
        alert('You Have Clicked 2 Images') 
    }

    else if (click === 2 && Imgclick1 === 1){
        click = click - 1;
        africaImg.classList.remove('selected')
        Imgclick1 = 0;
    }

    else if (Imgclick1 === 0){
        africaImg.classList.add('selected')
        africa = africa + 1;
        click++;
        Imgclick1 = 1;
    }
    else if (Imgclick1 === 1){
        africaImg.classList.remove('selected')
        africa = africa - 1;
        click = click - 1;
        Imgclick1 = 0;
    }
console.log(click)

})
let americanImg = document.querySelector('.american_img')
americanImg.addEventListener('click',  () =>{
    if (click === 2 && Imgclick2 === 0){
        alert('You Have Clicked 2 Images') 

    }
    else if (click === 2 && Imgclick2 === 1){
        click = click - 1;
        americanImg.classList.remove('selected')
        Imgclick2 = 0;
    }

    else if (Imgclick2 === 0){
        americanImg.classList.add('selected')
        americas = americas + 1;
        Imgclick2 = 1;
        click++;
    }
    else if (Imgclick2 === 1){
        americanImg.classList.remove('selected')
        americas = americas - 1;
        click = click - 1;
        Imgclick2 = 0;
    }
    console.log(click)

})
let asianImg = document.querySelector('.asian_img')
asianImg.addEventListener('click',  () =>{
    if (click === 2 && Imgclick3 === 0){
        alert('You Have Clicked 2 Images') 
    }
    else if (click === 2 && Imgclick3 === 1){
        click = click - 1;
        asianImg.classList.remove('selected')
        Imgclick3 = 0;
    }

    else if (Imgclick3 === 0){
        asianImg.classList.add('selected')
        asia = asia + 1;
        Imgclick3 = 1;
        click++;
    }
    else if (Imgclick3 === 1){
        asianImg.classList.remove('selected')
        asia = asia - 1;
        click = click - 1;
        Imgclick3 = 0;
    }
    console.log(click)
})
let europeanImg = document.querySelector('.european_img')
europeanImg.addEventListener('click',  () =>{

    if (click === 2 && Imgclick4 === 0){
        alert('You Have Clicked 2 Images') 
    }
    else if (click === 2 && Imgclick4 === 1){
        click = click - 1;
        europeanImg.classList.remove('selected')
        Imgclick4 = 0;
    }
    else if (Imgclick4 === 0){
        europeanImg.classList.add('selected')
        europe = europe + 1;
        click++;
        Imgclick4 = 1;
    }
    else if (Imgclick4 === 1){
        europeanImg.classList.remove('selected')
        europe = europe - 1;
        click = click - 1;
        Imgclick4 = 0;
    }
console.log(click)

})

let i = 0;
let j = 0;
document.querySelector('.option-form').addEventListener('submit', async(event) =>{
    event.preventDefault()
    document.querySelector('#dashboardScreen').classList.add('hidden')
    document.querySelector('#dashboardScreen2').classList.remove('hidden')


    asianImg.src = "https://images.unsplash.com/photo-1557683316-973673baf926?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sb3IlMjBiYWNrZ3JvdW5kfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
    africaImg.src = "https://images.unsplash.com/photo-1557683316-973673baf926?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sb3IlMjBiYWNrZ3JvdW5kfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
    europeanImg.src ="https://images.unsplash.com/photo-1557683316-973673baf926?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sb3IlMjBiYWNrZ3JvdW5kfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
    americanImg.src = "https://images.unsplash.com/photo-1557683316-973673baf926?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sb3IlMjBiYWNrZ3JvdW5kfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
})

let currentCategory = document.querySelector('.category')
currentCategory.innerText = category[i]
document.querySelector('.skip').addEventListener('click', ()=>{
       i++
       currentCategory.innerText = category[i]
       j = 0;
       if( i === 4){
           document.querySelector('#dashboardScreen2').classList.add('hidden')
           document.querySelector('#dashboardScreen3').classList.remove('hidden') 
           i = 0;
        }
                finalContinent()
})


document.querySelector('.next').addEventListener('click',  () =>{
    africaImg.classList.remove('selected')
    americanImg.classList.remove('selected')
    asianImg.classList.remove('selected')
    europeanImg.classList.remove('selected')

    if (currentCategory.innerText === 'Music'){
    
        asianImg.src = categoryImg.Imgmusic.asianMusic[j];
        africaImg.src = categoryImg.Imgmusic.africanMusic[j];
        europeanImg.src = categoryImg.Imgmusic.europeanMusic[j];
        americanImg.src = categoryImg.Imgmusic.americanMusic[j];
        if (j === 2){
            alert("Switch to next category")
        } 
        
    } 

    if (currentCategory.innerText === 'Food'){
        asianImg.src = categoryImg.ImgFood.asianFood[j];
        africaImg.src = categoryImg.ImgFood.africanFood[j];
        europeanImg.src = categoryImg.ImgFood.europeanFood[j];
        americanImg.src = categoryImg.ImgFood.americanFood[j]; 
        
        if (j === 4){
            alert("Switch to next category")
        } 
    } 

    if (currentCategory.innerText === 'Culture'){
        asianImg.src = categoryImg.Imgculture.asianculture[j];
        africaImg.src = categoryImg.Imgculture.africanculture[j];
        europeanImg.src = categoryImg.Imgculture.europeanculture[j];
        americanImg.src = categoryImg.Imgculture.americanculture[j]; 
        if (j === 5){
            alert("Switch to next category")
        }  
    }

    if (currentCategory.innerText === 'Activities'){
        asianImg.src = categoryImg.ImgActivities.asianActivities[j];
        africaImg.src = categoryImg.ImgActivities.africanActivities[j];
        europeanImg.src = categoryImg.ImgActivities.europeanActivities[j];
        americanImg.src = categoryImg.ImgActivities.americanActivities[j];
        if (j === 5){
            alert("Switch to next category")
        }   
    }
        Imgclick1 = 0;
        Imgclick2 = 0;
        Imgclick3 = 0;
        Imgclick4 = 0;
        click = 0;
        console.log(click)
        j = j+1
})


let finalContinent = () =>{
    let result = Math.max(africa,europe,americas,asia)
        console.log(result)
    let final = document.querySelector('#final-result')
    if(result === africa){

        final.innerText = "Africa Next"
        resultName = 'africa'
    }
    if(result === europe){
        final.innerText = "Europe Next"
        resultName = 'europe'
    }
    if(result === americas){
        final.innerText = "North Or South America Next"
        resultName = 'america'
    }
    if(result === asia){
     final.innerText = "Asia Next"
     resultName = 'asia'
    }
}

document.querySelector('#logout-link').addEventListener('click', ()=>{
    localStorage.removeItem('userId')
    document.querySelector('.option-form').reset();
    document.querySelector('.login-form').reset();
    document.querySelector('.signup-form').reset();
    document.querySelector('#screen').classList.add('hidden')
    document.querySelector('#dashboardScreen3').classList.add('hidden')
    document.querySelector('.home-page').classList.remove('hidden')
    africa =  0;
    europe = 0;
    asia = 0;
    americas = 0;
    i = 0;
})


document.querySelector('#saveresult-link').addEventListener('click', async()=>{
    let userId = localStorage.getItem('userId')
    let response
    try {
       response = await axios.post(`http://localhost:3011/users/${userId}/save`,{
            resultName: resultName
        })
        alert('You have saved your current result')

    } catch (error) {
        console.log(response)
    }
})

document.querySelector('#viewresult-link').addEventListener('click', async()=>{
    let userId = localStorage.getItem('userId')
    let response
    try { 
        response = await axios.get(`http://localhost:3011/users/${userId}/viewsaved`)

        let results = document.querySelector('.results')
        results.innerText = `Your results are listed below`
        for(let i = 0; i < response.data.length; i++) {
         let Names = document.createElement("p");
         Names.innerText = response.data[i].resultName    
         results.append(Names)
    }
    } catch (error) {
        console.log(error)
    }
})

document.querySelector('#delete-link').addEventListener('click', async()=>{
    let userId = localStorage.getItem('userId')
    let response 
try {
    response = await axios.delete(`http://localhost:3011/users/${userId}`)
    let results = document.querySelector('.results')
    results.innerText = `There are no more saved results`

} catch (error) {
    
}

})


document.querySelector('#profile-link').addEventListener('click', async() =>{
    let userId = localStorage.getItem('userId')
    let response
    try {
        response = await axios.get(`http://localhost:3011/users/${userId}/profile`) 
        
        let username = document.querySelector('#usersfirstname')
        let userlastname = document.querySelector('#userlastname')
        let useremail = document.querySelector('#useremail')
        let resultInfo = document.querySelector('.results-info')

        username.innerText = response.data.user.firstname
        userlastname.innerText = response.data.user.lastname
        useremail.innerText = response.data.user.email

            for(let i = 0; i < response.data.result.length; i ++){

                    let Names = document.createElement("p");
                    Names.innerText = response.data.result[i].resultName    
                    resultInfo.append(Names)

            }

        document.querySelector('#profilePage').classList.remove('hidden')
        document.querySelector('#dashboardScreen').classList.add('hidden')
        document.querySelector('#dashboardScreen2').classList.add('hidden')
        document.querySelector('#dashboardScreen3').classList.add('hidden')

        console.log ( response.data)
    } catch (error) {
        
    }
})



document.querySelector('#home-link').addEventListener('click', async() =>{

    africa =  0;
    europe = 0;
    asia = 0;
    americas = 0;
    i = 0;
    document.querySelector('.option-form').reset();
    document.querySelector('#profilePage').classList.add('hidden')
    document.querySelector('#dashboardScreen').classList.remove('hidden')
    document.querySelector('#dashboardScreen2').classList.add('hidden')
    document.querySelector('#dashboardScreen3').classList.add('hidden')

})
