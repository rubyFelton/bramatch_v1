using AutoMapper;
using bramatch_v1.Models;
using bramatch_v1.TransferObjects;
using Microsoft.AspNetCore.Mvc;

namespace bramatch_v1.Controllers;

// [Authorize]
[ApiController]
[Route("api/")]
[Produces(contentType: "application/json", "application/xml")]
public class BraController : ControllerBase
{
    private IMapper _mapper;

    public BraController(IMapper mapper)
    {
        this._mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
    }

    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(UserProfileDTO))]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [Route("profile")]
    [HttpGet]
    async public Task<ActionResult<UserProfileDTO>> GetUserProfile()
    {
        UserProfileDTO user = new UserProfileDTO();
        return user;
    }
}