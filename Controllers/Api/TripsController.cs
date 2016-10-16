using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheWorld.Models;
using TheWorld.ViewModels;

namespace TheWorld.Controllers.Api
{
    [Route("api/trips")]
    public class TripsController : Controller
    {
        private IWorldRepository _repository;

        public TripsController(IWorldRepository repository)
        {
            _repository = repository;
        }
        
        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                var results = _repository.GetAllTrips();

                return Ok(Mapper.Map<IEnumerable<TripViewModel>>(results));
            }
            catch(Exception ex)
            {
                //TODO Logging
                return BadRequest("Error ocurred");
            }
        }

        [HttpPost]
        public ActionResult Post([FromBody] TripViewModel theTrip)
        {
            if(ModelState.IsValid)
            {
                // Save to the Database
                var newTrip = Mapper.Map<Trip>(theTrip);

                return Created($"api/trips/{theTrip.Name}", Mapper.Map<TripViewModel>(newTrip) );
            }

            return BadRequest(ModelState);
        }
    }
}
