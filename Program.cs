using _02._students_orm_test_demo.Models;

var dbContext = new StudentDbContext();

dbContext.Database.EnsureCreated();

dbContext.Courses.Add(new Course { Name = "Entity Frakework Core" });
dbContext.Courses.Add(new Course { Name = "SQL Server" });

dbContext.SaveChanges();