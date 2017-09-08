using Microsoft.AspNetCore.Mvc;
using PrviWizard.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PrviWizard.Controllers
{
    [Route("api/[controller]")]
    public class PersonsController : Controller
    {
        private static List<Person> lista;
        public static List<Person> GetList()
        {
            if (lista == null)
            {
                lista = new List<Person>();

                Person p = new Person(1, "Alen", "Alenic", "alen.email.com", "ulica1");
                Person p1 = new Person(2, "Danijel", "Vilenica", "danijel.email.com", "ulica2");
                Person p2 = new Person(3, "Suncica", "Sun", "suncica.email.com", "ulica3");
                Person p3 = new Person(4, "Lovro", "Lovrić", "lovro.email.com", "ulica4");

                lista.Add(p);
                lista.Add(p1);
                lista.Add(p2);
                lista.Add(p3);
            }

            return lista;
        }
        // GET: api/values
        [HttpGet]
        public IActionResult Get()
        {
            return Json(GetList());
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Json(GetList().Find(person => person.Id == id));
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Person p)
        {
            int index = GetList().Count + 1;
            GetList().Add(new Person(index, p.FirstName, p.LastName, p.Email, p.Address));
            return Ok();
        }

        // PUT api/values/5
        [HttpPut]
        public IActionResult Put([FromBody]Person p)
        {
            var person = GetList().First(x => x.Id == p.Id);
            var index = GetList().IndexOf(person);
            GetList()[index] = p;
            return Ok();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            GetList().RemoveAll(person => person.Id == id);
            return Ok();
        }
    }
}
