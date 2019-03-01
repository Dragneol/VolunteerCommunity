using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using API.Models;

namespace API.Controllers
{
    public class EventsController : ApiController
    {
        private EntityConnection db = new EntityConnection();

        [Route("api/Events/Remove")]
        [HttpPost]
        public IHttpActionResult Remove(int ID)
        {
            db.Events.Find(ID).Status = false;
            db.SaveChanges();
            return Ok("Remove success");
        }

        [Route("api/Events/StatisticPerMonth")]
        [HttpGet]
        public List<Statistics> Statistic()
        {
            List<Statistics> statistics = new List<Statistics>();
            DateTime curentime =  DateTime.Now;
            int numberOfEven = 0;
            for(int i = 1; i <= curentime.Month; i++)
            {
                DateTime from = new DateTime(curentime.Year, i, 1 );
                DateTime to = new DateTime();
                if (from.Month == 12)
                     to = curentime;
                else
                    to = new DateTime(curentime.Year, i+1, 1 );
                numberOfEven = db.Events.Where(p => p.TimeCreated >= from && p.TimeCreated < to).Count();
                statistics.Add(new Statistics() { month = i, value = numberOfEven });
            }
            return statistics;
        }
        // GET: api/Events
        public IQueryable<Event> GetEvents()
        {
            return db.Events;
        }

        // GET: api/Events/5
        [ResponseType(typeof(Event))]
        public IHttpActionResult GetEvent(int id)
        {
            Event @event = db.Events.Find(id);
            if (@event == null)
            {
                return NotFound();
            }

            return Ok(@event);
        }

        // PUT: api/Events/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutEvent(int id, Event @event)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != @event.ID)
            {
                return BadRequest();
            }

            db.EventVolunteerTypes.RemoveRange(db.EventVolunteerTypes.Where(e => e.EventID == @event.ID));
            db.EventVolunteerTypes.AddRange(@event.EventVolunteerTypes);
            db.Entry(@event).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EventExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Events
        [ResponseType(typeof(Event))]
        public IHttpActionResult PostEvent(Event @event)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Events.Add(@event);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = @event.ID }, @event);
        }

        // DELETE: api/Events/5
        [ResponseType(typeof(Event))]
        public IHttpActionResult DeleteEvent(int id)
        {
            Event @event = db.Events.Find(id);
            if (@event == null)
            {
                return NotFound();
            }

            db.Events.Remove(@event);
            db.SaveChanges();

            return Ok(@event);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EventExists(int id)
        {
            return db.Events.Count(e => e.ID == id) > 0;
        }
    }
}